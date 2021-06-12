import { useState, useEffect } from "react";

// info & function from https://usehooks.com/useDebounce/
function useDebounce(inputToDebounce, timer) {
  const [debouncedInput, setDebouncedInput] = useState(inputToDebounce);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedInput(inputToDebounce);
    }, timer);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [inputToDebounce, timer]);
  return debouncedInput;
}

export default useDebounce;
