import {useEffect, useState} from "react";

// useDebounce returns a value only when it has not been updated in the last `delayInMilliseconds`
const useDebounce = (value: string, delayInMilliseconds: number) => {

    const [debouncedValue, setDebouncedValue] = useState('')

    useEffect(() => {
        const timeOutHandler = setTimeout(() => setDebouncedValue(value), delayInMilliseconds)

        return () => {
            clearTimeout(timeOutHandler)
        }

    }, [value, delayInMilliseconds])

    return debouncedValue
}

export default useDebounce
