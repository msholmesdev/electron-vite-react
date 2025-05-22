import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @example
 * const className = tw`bg-red-200 text-green-400`;
 */
export const tw = String.raw;
