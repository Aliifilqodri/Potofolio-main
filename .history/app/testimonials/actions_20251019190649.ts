"use server"
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
    console.log("aliptelanjang", result);
    } catch (error) {
       console.log("error insert testimonial:", error); 
    }
  };

  export const fetchTestimonials = async () =>{
    try {
        
    } catch (error) {
        
    }
  }