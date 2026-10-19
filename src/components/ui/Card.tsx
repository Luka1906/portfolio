import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-border bg-surface p-7 ${className}`}
    >
      {children}
    </article>
  );
}
