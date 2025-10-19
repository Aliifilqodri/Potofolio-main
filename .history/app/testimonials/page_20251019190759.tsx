"use server";
import Testimonials from "./TestimonialPage";
import { insertTestimonial, fetchTestimonials } from "./actions";

export default async function Page() {
  return <Testimonials handleSubmitDB={insertTestimonial} />;
}
