import { useEffect, useState } from "react";

export function useDebounce<T>(initialValue: T, delay = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  });

  return debouncedValue;
}
