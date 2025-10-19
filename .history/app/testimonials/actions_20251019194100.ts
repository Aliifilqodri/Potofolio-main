"use server";
import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

export const insertTestimonial = async ({
  name,
  description,
  status,
  stars,
  photo,
}: {
  name: string;
  description: string;
  status: string;
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
      status: status, // Menyimpan status ke database
      stars: stars,
      photo: null, // Asumsi foto belum dihandle
    };
    const result = await collection.insertOne(doc);

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log("error insert testimonial:", error);
    return { error: "Failed to insert testimonial." };
  }
};

export const fetchTestimonials = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("testimonials");
    const testimonials = await collection.find({}).sort({ _id: -1 }).toArray();

    const serializedTestimonials = testimonials.map((doc) => {
      return {
        ...doc, // Menyalin semua field dari dokumen, termasuk 'status'
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