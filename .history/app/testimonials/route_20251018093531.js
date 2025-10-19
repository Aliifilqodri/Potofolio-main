import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

// FUNGSI UNTUK MENGAMBIL SEMUA TESTIMONI (GET)
export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("myPortfolio") // Sesuaikan dengan nama database Anda

    const testimonials = await db
      .collection("testimonials")
      .find({})
      .sort({ _id: -1 }) // Urutkan dari yang terbaru
      .toArray()

    return NextResponse.json({ success: true, data: testimonials })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch testimonials" }, { status: 500 })
  }
}

// FUNGSI UNTUK MENAMBAHKAN TESTIMONI BARU (POST)
export async function POST(request) {
  try {
    const newTestimonial = await request.json()
    const client = await clientPromise
    const db = client.db("portopoliolipz ") // Sesuaikan dengan nama database Anda

    // Tambahkan timestamp
    newTestimonial.createdAt = new Date();

    const result = await db.collection("testimonials").insertOne(newTestimonial)
    
    // Mengembalikan data yang baru saja dibuat
    const insertedDoc = await db.collection("testimonials").findOne({ _id: result.insertedId });


    return NextResponse.json({ success: true, data: insertedDoc }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create testimonial" }, { status: 500 })
  }
}