import { useEffect, useRef } from "react"

export const useCallbackRef = <T extends Function | undefined>(callback: T) => {
  const ref = useRef<T>(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]); 

  return ref;
}