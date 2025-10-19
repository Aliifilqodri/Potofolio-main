// page.tsx

"use server";
import Testimonials from "./TestimonialPage";
import { insertTestimonial, fetchTestimonials } from "./actions";

// Revalidate data setiap 60 detik atau saat ada request baru
export const revalidate = 60;

export default async function Page() {
  const testimonials = await fetchTestimonials();

  // console.log-nya dihapus agar terminal lebih bersih
  return (
    <Testimonials
      handleSubmitDB={insertTestimonial}
      testimonialsData={testimonials || []} // Pastikan selalu array
    />
  );
}
