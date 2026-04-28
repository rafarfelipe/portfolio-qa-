import { useState } from "react";

export function useImageError() {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  const hasImageError = (index: number) => {
    return imageErrors.has(index);
  };

  return {
    imageErrors,
    handleImageError,
    hasImageError,
  };
}