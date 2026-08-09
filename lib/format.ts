const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Formats a "YYYY-MM" string (e.g. "2026-06") as "June 2026". */
export function formatAsOf(asOf: string) {
  const [year, month] = asOf.split("-").map(Number);
  return `${monthNames[month - 1]} ${year}`;
}
