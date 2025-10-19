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

// Fungsi untuk MENGAMBIL data testimonials
export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio"); // <-- GANTI DENGAN NAMA DATABASE KAMU
    const collection = db.collection("testimonials");

    const testimonialsData = await collection.find({}).sort({ _id: -1 }).toArray();

    // INI BAGIAN KUNCI: Konversi data mentah dari DB menjadi objek yang aman
    const serializedTestimonials = testimonialsData.map((doc) => ({
      id: doc._id.toString(), // Ubah ObjectId menjadi string
      name: doc.name,
      description: doc.description,
      stars: Number(doc.stars), // Pastikan tipe datanya number
      photo: doc.photo || undefined, // Gunakan undefined jika null
    }));

    return serializedTestimonials;
  } catch (error) {
    console.error("Gagal mengambil data testimonials:", error);
    return [];
  }
}

// Fungsi untuk MENYIMPAN data testimonial (Server Action)
export async function insertTestimonial(
  formData: FormData
): Promise<Testimonial | null> {
  let photoUrl: string | undefined = undefined;

  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const stars = Number(formData.get("stars") as string);
    const photoFile = formData.get("photo") as File | null;

    // 1. Proses upload file ke Vercel Blob jika ada
    if (photoFile && photoFile.size > 0) {
      const blob = await put(photoFile.name, photoFile, { access: "public" });
      photoUrl = blob.url;
    }

    // 2. Simpan data ke MongoDB
    const client = await clientPromise;
    const db = client.db("portfolio"); // <-- GANTI DENGAN NAMA DATABASE KAMU
    const collection = db.collection("testimonials");

    const newDocument = { name, description, stars, photo: photoUrl };
    const result = await collection.insertOne(newDocument);

    // 3. Bersihkan cache agar data terbaru muncul di request berikutnya
    revalidatePath("/testimonials");

    // 4. Kembalikan data yang baru saja dibuat agar UI bisa update
    return {
      id: result.insertedId.toString(),
      name,
      description,
      stars,
      photo: photoUrl,
    };
  } catch (error) {
    console.error("Gagal menyimpan testimoni:", error);
    return null;
  }
}