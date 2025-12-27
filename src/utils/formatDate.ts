// src/lib/utils/date.ts
export function formatDate(date?: string): string {
  if (!date) return "No date";

  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
