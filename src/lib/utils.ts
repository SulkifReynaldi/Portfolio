/**
 * Utility helper untuk menggabungkan class Tailwind secara kondisional
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
