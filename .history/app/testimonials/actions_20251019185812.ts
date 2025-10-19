"use server"
import clientPromise from "../lib/mongodb";
export const handleSubmit = async ({
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
    const client = await clientPromise;
    const db = client.db("porto");
    const collection = db.collection("pizzaMenu");
    const doc = {
      name: name,
      description: description,
      stars: stars,
      photo: null,
    };
    const result = await collection.insertOne(doc);
    console.log("aliptelanjang", result);
  };