import { useEffect, useState } from "react";

export function useDebounce <T> (value: T, delay: number) {    
    const [debouncedVal, setDebouncedVal] = useState <T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {setDebouncedVal(value)}, delay)
        return () => clearTimeout(timer)

    }, [value, delay])

    return debouncedVal
}