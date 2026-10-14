"use client";

import { motion, useReducedMotion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export function TestimonialsColumn({
  className = "",
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  const prefersReducedMotion = useReducedMotion();
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={`min-w-0 overflow-hidden ${className}`} aria-label="Customer testimonials">
      <motion.div
        animate={prefersReducedMotion ? { y: 0 } : { y: "-50%" }}
        transition={{
          duration: prefersReducedMotion ? 0 : duration,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {repeatedTestimonials.map(({ text, image, name, role }, index) => (
          <article
            className="w-full max-w-xs rounded-3xl border border-border bg-background p-7 shadow-lg shadow-primary/10 sm:p-9"
            key={`${name}-${index}`}
            aria-hidden={index >= testimonials.length}
          >
            <p className="leading-7 text-foreground">{text}</p>
            <div className="mt-5 flex items-center gap-3">
              <img
                width={40}
                height={40}
                src={image}
                alt={name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <div className="flex min-w-0 flex-col">
                <div className="font-medium leading-5 tracking-tight">{name}</div>
                <div className="text-sm leading-5 tracking-tight text-foreground/60">{role}</div>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}

export default TestimonialsColumn;
