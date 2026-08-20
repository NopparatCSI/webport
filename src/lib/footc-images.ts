export const footcImages = Array.from(
  { length: 33 },
  (_, index) => `/footc/footc-${String(index + 1).padStart(2, "0")}.png`,
);
