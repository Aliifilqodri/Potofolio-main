// page.tsx

import Testimonials from "./TestimonialPage";
// Impor action yang baru dan hapus yang lama
import { addTestimonial, fetchTestimonials } from "./actions";

// Memastikan halaman ini selalu mengambil data terbaru dari server
export const dynamic = 'force-dynamic';

export default async function Page() {
  const testimonials = await fetchTestimonials();
  
  return (
    <Testimonials
      addTestimonialAction={addTestimonial} // Kirim server action sebagai prop
      testimonialsData={testimonials || []}
    />
  );
}