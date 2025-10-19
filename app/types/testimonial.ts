export interface Testimonial {
  _id?: string; // ✅ optional biar gak error build
  name: string;
  description: string;
  stars: number;
  status?: string;
  photo?: string | null;
}
