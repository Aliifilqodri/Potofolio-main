// File: app/testimonials/page.tsx
import Testimonials from "./TestimonialPage"; // Adjust path if needed
import { addTestimonial, fetchTestimonials } from "./actions"; // Adjust path if needed
import { Testimonial } from "../types/testimonial"; // Adjust path if needed

// Ensures the page fetches fresh data on every request
export const dynamic = "force-dynamic";

export default async function Page() {
  let testimonials: Testimonial[] = []; // Initialize as an empty array

  try {
    // Fetch testimonials from the server action
    const result: any = await fetchTestimonials();

    // Check if the result is an array and map it to the Testimonial type
    testimonials = Array.isArray(result)
      ? result.map((item: any) => ({
          // Ensure _id is always a string, use a fallback if null/undefined
          _id: String(item?._id ?? `temp_${Date.now()}_${Math.random()}`),
          name: item?.name ?? "Anonymous",
          description: item?.description ?? "", // Use the correct field name
          // Parse stars as a number, defaulting to 0 if invalid
          stars: parseInt(String(item?.stars ?? 0), 10),
          // Include status, defaulting to "Client" if missing
          status: item?.status ?? "Client",
          // Include photo, defaulting to null if missing
          photo: item?.photo ?? null,
          // Remove fields not present in your data (like message, date)
        }))
      : []; // If result is not an array, keep testimonials empty

  } catch (error) {
    console.error("❌ Failed to fetch testimonials on page:", error);
    // Optionally: Set testimonials to an empty array or handle the error display
    testimonials = [];
  }

  // Pass the server action and the mapped testimonials data to the client component
  return (
    <Testimonials
      addTestimonialAction={addTestimonial}
      testimonialsData={testimonials}
    />
  );
}