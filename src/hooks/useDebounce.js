import { useEffect, useState } from 'react'

export default function useDebounce(getValue, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(getValue)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(getValue)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [delay, getValue])
  return debounceValue
}