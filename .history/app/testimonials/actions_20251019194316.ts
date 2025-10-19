// action.ts

"use server";
import clientPromise from "../lib/mongodb";
import { writeFile } from "fs/promises"; // Untuk menyimpan file
import path from "path"; // Untuk mengelola path file
import { revalidatePath } from "next/cache"; // Untuk refresh data otomatis

// Menggantikan fungsi insertTestimonial lama
export const addTestimonial = async (formData: FormData) => {
  // 1. Ekstrak semua data dari form
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const status = formData.get("status") as string; // Status dari input teks
  const stars = formData.get("stars") as string;
  const photoFile = formData.get("photo") as File | null;

  // Cek data wajib
  if (!name || !description || !status || !stars) {
    return { error: "Please fill all required fields." };
  }

  let photoUrl: string | null = null;

  // 2. Proses unggahan file jika ada
  if (photoFile && photoFile.size > 0) {
    try {
      // Ubah file menjadi buffer (format data biner)
      const buffer = Buffer.from(await photoFile.arrayBuffer());
      // Buat nama file yang unik untuk menghindari duplikat
      const filename = `${Date.now()}-${photoFile.name.replace(/\s/g, "_")}`;
      const uploadPath = path.join(process.cwd(), "public/uploads", filename);

      // Tulis file ke folder public/uploads
      await writeFile(uploadPath, buffer);
      photoUrl = `/uploads/${filename}`; // Ini URL publik yang akan disimpan ke DB
    } catch (error) {
      console.error("Failed to upload photo:", error);
      return { error: "Photo upload failed." };
    }
  }

  // 3. Simpan semua data (termasuk URL foto) ke MongoDB
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");

    const doc = {
      name,
      description,
      status, // Simpan status yang diinput pengguna
      stars,
      photo: photoUrl, // Simpan URL foto, bisa null jika tidak ada foto
    };

    await collection.insertOne(doc);

    // 4. Perintahkan Next.js untuk mengambil ulang data di halaman testimonials
    revalidatePath("/testimonials");

    return { success: true };
  } catch (error) {
    console.log("Error inserting testimonial:", error);
    return { error: "Database operation failed." };
  }
};


// Fungsi ini tidak perlu diubah
export const fetchTestimonials = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");
    const testimonials = await collection.find({}).sort({ _id: -1 }).toArray();

    const serializedTestimonials = testimonials.map((doc) => {
      return {
        ...doc,
        _id: doc._id.toString(),
        stars: parseInt(doc.stars, 10) || 0,
      };
    });

    return serializedTestimonials;
  } catch (error) {
    console.log("error fetch testimonials:", error);
    return [];
  }
};