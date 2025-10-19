// app/testimonials/actions.ts
"use server";

import clientPromise from "@/lib/mongodb"; // Pastikan path ini benar
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

// Definisikan tipe data agar konsisten
export interface Testimonial {
  id: string;
  name: string;
  description: string;
  stars: number;
  photo?: string;
}

/**
 * Mengambil semua testimoni dari database dan memastikan
 * data aman untuk dikirim ke Client Component.
 */
export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const client = await clientPromise;
    const db = client.db("nama_database_kamu"); // GANTI DENGAN NAMA DB KAMU
    const collection = db.collection("testimonials");

    const testimonialsData = await collection
      .find({})
      .sort({ _id: -1 }) // Tampilkan yang terbaru di atas
      .toArray();

    // INI BAGIAN PENTING: Konversi data mentah dari DB menjadi objek yang "bersih"
    // Ini memperbaiki error "Only plain objects can be passed..."
    const serializedTestimonials = testimonialsData.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name,
      description: doc.description,
      stars: Number(doc.stars),
      photo: doc.photo || undefined,
    }));

    return serializedTestimonials;
  } catch (error) {
    console.error("Gagal mengambil testimonials:", error);
    return [];
  }
}

/**
 * Menerima data dari form, mengupload foto, menyimpan ke database,
 * dan mengembalikan data baru untuk update UI secara instan.
 */
export async function insertTestimonial(
  formData: FormData
): Promise<Testimonial | null> {
  let photoUrl: string | undefined = undefined;
  
  // Ambil data dari FormData
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const stars = formData.get("stars") as string;
  const photoFile = formData.get("photo") as File | null;
  
  // Validasi dasar
  if (!name || !description || !stars) {
    console.error("Data form tidak lengkap.");
    return null;
  }

  try {
    // 1. Proses Upload Foto jika ada
    if (photoFile && photoFile.size > 0) {
      const blob = await put(photoFile.name, photoFile, {
        access: "public",
      });
      photoUrl = blob.url; // Simpan URL dari Vercel Blob
    }

    // 2. Simpan ke MongoDB
    const client = await clientPromise;
    const db = client.db("nama_database_kamu"); // GANTI DENGAN NAMA DB KAMU
    const collection = db.collection("testimonials");

    const newDocument = {
      name,
      description,
      stars: Number(stars),
      photo: photoUrl,
    };

    const result = await collection.insertOne(newDocument);

    // 3. Revalidate path agar cache di-update
    revalidatePath("/testimonials");

    // 4. Kembalikan data yang baru saja dibuat agar client bisa update state
    return {
      id: result.insertedId.toString(),
      name: newDocument.name,
      description: newDocument.description,
      stars: newDocument.stars,
      photo: newDocument.photo,
    };
  } catch (error) {
    console.error("Gagal menyimpan testimoni:", error);
    return null; // Kembalikan null jika terjadi error
  }
}