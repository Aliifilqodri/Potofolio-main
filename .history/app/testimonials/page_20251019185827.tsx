"use server";
import Testimonials from "./TestimonialPage";
import { insertTestimonial } from "./actions";

export default async function Page() {
  
  return <Testimonials handleSubmitDB={handleSubmit} />;
}
