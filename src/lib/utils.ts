import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringToSlug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s{2,}/g, " ")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
