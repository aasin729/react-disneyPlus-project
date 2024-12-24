import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debouneceValue, setDebouneceValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouneceValue(value)
      }, delay)
    
      return () => {
        clearTimeout(handler)
      }
    }, [value, delay])


    return debouneceValue
}