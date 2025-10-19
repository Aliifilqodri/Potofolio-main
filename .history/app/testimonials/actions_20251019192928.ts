// action.ts

"use server";
import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

export const insertTestimonial = async ({
  name,
  description,
  stars,
  photo,
}: {
  name: string;
  description: string;
  stars: string;
  photo?: string;
}) => {
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");
    const doc = {
      name: name,
      description: description,
      stars: stars,
      photo: null,
    };
    const result = await collection.insertOne(doc);

    // ✨ UBAH HASIL MENJADI PLAIN OBJECT
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), // <-- ObjectId diubah jadi string
    };
  } catch (error) {
    console.log("error insert testimonial:", error);
    // Return a serializable error object
    return { error: "Failed to insert testimonial." };
  }
};

export const fetchTestimonials = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");
    const testimonials = await collection.find({}).sort({ _id: -1 }).toArray(); // urutkan dari terbaru

    // ✨ UBAH DATA MENJADI SERIALIZABLE
    const serializedTestimonials = testimonials.map((doc) => {
      return {
        ...doc,
        _id: doc._id.toString(), // <-- ObjectId diubah jadi string
        // stars perlu diubah ke number karena interface di client butuh number
        stars: parseInt(doc.stars, 10) || 0,
      };
    });

    return serializedTestimonials;
  } catch (error) {
    console.log("error fetch testimonials:", error);
    return []; // Return array kosong jika error
  }
};