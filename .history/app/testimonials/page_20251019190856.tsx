"use server";
import Testimonials from "./TestimonialPage";
import { insertTestimonial, fetchTestimonials } from "./actions";

export default async function Page() {
  const testimonials = await fetchTestimonials();
  console.log("testimonials di page tsx:", testimonials);
  return <Testimonials handleSubmitDB={insertTestimonial} testimonials={testimonials}/>;
}
