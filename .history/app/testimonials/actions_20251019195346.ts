// action.ts

"use server";
import clientPromise from "../lib/mongodb";
import { writeFile } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

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

  if (photoFile && photoFile.size > 0) {
    console.log("Photo detected. Starting upload process..."); // Log 1: Proses dimulai
    try {
      const buffer = Buffer.from(await photoFile.arrayBuffer());
      const filename = `${Date.now()}-${photoFile.name.replace(/\s/g, "_")}`;
      
      // Kita akan log path tujuan untuk memastikan path-nya benar
      const uploadPath = path.join(process.cwd(), "public/uploads", filename);
      console.log("Attempting to save file to:", uploadPath); // Log 2: Path tujuan

      await writeFile(uploadPath, buffer);
      photoUrl = `/uploads/${filename}`;
      console.log("File saved successfully at:", photoUrl); // Log 3: Berhasil disimpan

    } catch (error) {
      // Kita akan log error spesifik dari proses penyimpanan file
      console.error("🔥 Failed to write file:", error); // Log 4: Error spesifik
      return { error: "Photo upload failed." };
    }
  }

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

// Fungsi fetchTestimonials tidak berubah
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