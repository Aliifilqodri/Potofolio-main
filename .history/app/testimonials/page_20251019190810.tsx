"use server";
import Testimonials from "./TestimonialPage";
import { insertTestimonial, fetchTestimonials } from "./actions";

export default async function Page() {
  const testimonials = await fetchTestimonials();
  return <Testimonials handleSubmitDB={insertTestimonial} />;
}
