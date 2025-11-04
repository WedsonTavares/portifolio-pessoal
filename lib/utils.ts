import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix local asset paths with basePath when exporting to GitHub Pages
// Usage: withBasePath('/img.png') -> '/<repo>/img.png' on Pages; '/img.png' locally
export function withBasePath(src?: string) {
  if (!src) return src as any;
  // Skip external URLs
  if (/^https?:\/\//i.test(src)) return src;

  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Ensure single leading slash on src
  const normalized = src.startsWith("/") ? src : `/${src}`;
  return `${base}${normalized}`;
}
