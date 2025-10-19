"use server";
import Testimonials from "./TestimonialPage";
import clientPromise from "../lib/mongodb.js";

export default async function Page() {
  
  return <Testimonials handleSubmitDB={handleSubmit} />;
}
