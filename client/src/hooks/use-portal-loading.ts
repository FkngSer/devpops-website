import { useState, useEffect, useCallback } from 'react';

interface PortalLoadingOptions {
  initialState?: boolean;
  minDuration?: number;
  delay?: number;
}

export function usePortalLoading({
  initialState = false,
  minDuration = 1000,
  delay = 0
}: PortalLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [startTime, setStartTime] = useState<number | null>(null);
  
  // Start loading
  const startLoading = useCallback(() => {
    setIsLoading(true);
    setStartTime(Date.now());
  }, []);
  
  // Stop loading, ensuring minimum duration
  const stopLoading = useCallback(() => {
    if (startTime) {
      const elapsedTime = Date.now() - startTime;
      
      if (elapsedTime < minDuration) {
        // If we haven't met the minimum duration, wait before stopping
        setTimeout(() => {
          setIsLoading(false);
          setStartTime(null);
        }, minDuration - elapsedTime);
      } else {
        // We've exceeded minimum duration, stop immediately
        setIsLoading(false);
        setStartTime(null);
      }
    } else {
      // No start time recorded, just stop
      setIsLoading(false);
    }
  }, [startTime, minDuration]);
  
  // Auto-start on mount if initialState is true
  useEffect(() => {
    if (initialState) {
      if (delay > 0) {
        setTimeout(startLoading, delay);
      } else {
        startLoading();
      }
    }
  }, [initialState, delay, startLoading]);
  
  return {
    isLoading,
    startLoading,
    stopLoading
  };
}

export default usePortalLoading;