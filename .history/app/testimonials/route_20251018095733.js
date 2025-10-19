// FUNGSI UNTUK MENGAMBIL SEMUA TESTIMONI (GET)
export async function GET() {
  try {
    const client = await clientPromise
    // GANTI "myPortfolio" MENJADI "portopoliolipz"
    const db = client.db("portopoliolipz") 

    const testimonials = await db
      .collection("testimonials")
      .find({})
      .sort({ _id: -1 })
      .toArray()

    return NextResponse.json({ success: true, data: testimonials })
  } catch (error) {
    // ...
  }
}