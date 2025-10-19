"use server";
import Testimonials from "./TestimonialPage";
import clientPromise from "../lib/mongodb.js";

export default function Page() {
  return <Testimonials />;
}
