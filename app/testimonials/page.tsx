import Testimonials from "./TestimonialPage";
import { addTestimonial, fetchTestimonials } from "./actions";
import { Testimonial } from "../types/testimonial";

export const dynamic = "force-dynamic";

export default async function Page() {
  let testimonials: Testimonial[] = [];

  try {
    const result: any = await fetchTestimonials();

    testimonials = Array.isArray(result)
      ? result.map((item: any) => ({
          _id: String(item?._id ?? ""), // ✅ pastikan selalu string
          name: item?.name ?? "Anonymous",
          message: item?.message ?? "",
          description: item?.description ?? "",
          date: item?.date ?? new Date(),
          stars: item?.stars ?? 0,
        }))
      : [];
  } catch (error) {
    console.error("❌ Failed to fetch testimonials:", error);
  }

  return (
    <Testimonials
      addTestimonialAction={addTestimonial}
      testimonialsData={testimonials}
    />
  );
}
