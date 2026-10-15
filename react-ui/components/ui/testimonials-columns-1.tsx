"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export type TestimonialsColumnProps = {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
};

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  const shouldReduceMotion = useReducedMotion();
  const visibleTestimonials = shouldReduceMotion
    ? testimonials
    : [...testimonials, ...testimonials];

  return (
    <div className={cn("w-full min-w-0", className)}>
      <motion.div
        animate={shouldReduceMotion ? { translateY: 0 } : { translateY: "-50%" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {visibleTestimonials.map(({ text, image, name, role }, index) => {
          const isDuplicate = !shouldReduceMotion && index >= testimonials.length;

          return (
            <article
              className="w-full max-w-xs rounded-3xl border bg-card p-6 shadow-lg shadow-primary/10 sm:p-8"
              key={`${name}-${index}`}
              aria-hidden={isDuplicate ? true : undefined}
            >
              <p className="text-sm leading-7 text-foreground sm:text-base">{text}</p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  width={40}
                  height={40}
                  src={image}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="flex min-w-0 flex-col">
                  <div className="font-medium leading-5 tracking-tight">{name}</div>
                  <div className="leading-5 tracking-tight text-muted-foreground">{role}</div>
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </div>
  );
}
