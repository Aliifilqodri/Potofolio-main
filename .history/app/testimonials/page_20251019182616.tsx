"use server";
import Testimonials from "./TestimonialPage";
import clientPromise from "../lib/mongodb.js";

export default function Page() {
  const handleSubmit = async({name, description, stars, photo}:{name:string, description:string, stars:string, photo?:string})=>{
     const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("pizzaMenu");
    const doc = {
      name: formData.name,
      description: formData.description,
      stars: rating,
      photo: selectedFile ? selectedFile.name : null,
    };
    const result = await collection.insertOne(doc);
    console.log("aliptelanjang", result);
  }
  return <Testimonials />;
}
