export interface Testimonial {
  id?: string | number;
  quote: string;
  author: string;
  rating?: number;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  columns?: 1 | 2 | 3 | 4;
}
