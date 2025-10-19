// page.tsx

// HAPUS BARIS "use server"; DARI SINI

import Testimonials from "./TestimonialPage";
import { insertTestimonial, fetchTestimonials } from "./actions";

// Revalidate data setiap 60 detik atau saat ada request baru
export const revalidate = 60;

export default async function Page() {
  const testimonials = await fetchTestimonials();

  return (
    <Testimonials
      handleSubmitDB={insertTestimonial}
      testimonialsData={testimonials || []} // Pastikan selalu array
    />
  );
}