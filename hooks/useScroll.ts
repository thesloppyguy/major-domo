import { useState, useEffect, useRef } from "react";

export function useScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null); // 'up' | 'down' | null
  const [speed, setSpeed] = useState(0);
  const lastScrollTop = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    lastScrollTop.current = window.pageYOffset;
    let timeoutId: number | undefined | NodeJS.Timeout = undefined;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime.current;
      const scrollDiff = Math.abs(currentScrollTop - lastScrollTop.current);

      // Calculate speed in pixels per millisecond
      const currentSpeed = timeDiff > 0 ? scrollDiff / timeDiff : 0;
      setSpeed(currentSpeed);

      if (currentScrollTop > lastScrollTop.current) {
        setDirection("down");
      } else if (currentScrollTop < lastScrollTop.current) {
        setDirection("up");
      }

      lastScrollTop.current = currentScrollTop;
      lastScrollTime.current = currentTime;

      if (!isScrolling) {
        setIsScrolling(true);
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
        setSpeed(0);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolling]);

  return { isScrolling, direction, speed };
}
