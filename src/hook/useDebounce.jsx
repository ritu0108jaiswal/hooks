import React, { useState, useEffect } from "react";

function useDebounce(value, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearInterval(intervalId);
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
