// app/testimonials/page.tsx
import TestimonialPage from "./TestimonialPage"; // Impor komponen klienmu
import { fetchTestimonials, insertTestimonial } from "./actions";

export default async function Page() {
  // 1. Panggil action untuk mengambil data awal saat server me-render halaman
  const initialTestimonials = await fetchTestimonials();

  return (
    // 2. Kirim data awal dan action untuk submit form sebagai props
    <TestimonialPage
      testimonialsData={initialTestimonials}
      handleSubmitDB={insertTestimonial}
    />
  );
}