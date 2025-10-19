// app/testimonials/actions.ts

"use server";
import clientPromise from "../lib/mongodb";
import { revalidatePath } from "next/cache";

// Impor library Cloudinary
import { v2 as cloudinary } from 'cloudinary';

// 1. Konfigurasi Cloudinary (Otomatis membaca dari file .env.local)
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// 2. Fungsi bantuan untuk mengubah File menjadi format Buffer
async function fileToBuffer(file: File): Promise<Buffer> {
  const bytes = await file.arrayBuffer();
  return Buffer.from(bytes);
}

// Fungsi utama untuk menambahkan testimoni
export const addTestimonial = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string;
  const stars = formData.get("stars") as string;
  const photoFile = formData.get("photo") as File | null;

  if (!name || !description || !status || !stars) {
    return { error: "Please fill all required fields." };
  }

  let photoUrl: string | null = null;

  // Proses unggahan file ke Cloudinary
  if (photoFile && photoFile.size > 0) {
    try {
      const buffer = await fileToBuffer(photoFile);

      // 3. Mengunggah file ke Cloudinary
      const uploadResult = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { 
            folder: 'testimonials', // Opsional: Simpan gambar di folder 'testimonials'
            resource_type: 'auto' 
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });
      
      // 4. Dapatkan URL permanen yang aman dari Cloudinary
      photoUrl = uploadResult.secure_url;

    } catch (error) {
      console.error("🔥 Gagal unggah ke Cloudinary:", error);
      return { error: "Photo upload failed." };
    }
  }

  // Simpan URL ke MongoDB (logika ini tidak berubah)
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");

    const doc = { name, description, status, stars, photo: photoUrl };
    await collection.insertOne(doc);

    revalidatePath("/testimonials");
    return { success: true };
  } catch (error) {
    console.log("Error inserting testimonial to DB:", error);
    return { error: "Database operation failed." };
  }
};

// Fungsi fetchTestimonials tidak perlu diubah sama sekali
export const fetchTestimonials = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");
    const testimonials = await collection.find({}).sort({ _id: -1 }).toArray();
    const serializedTestimonials = testimonials.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
      stars: parseInt(doc.stars, 10) || 0,
    }));
    return serializedTestimonials;
  } catch (error) {
    console.log("error fetch testimonials:", error);
    return [];
  }
};