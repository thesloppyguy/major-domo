import { useState, useEffect, useRef } from "react";

export function useScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null); // 'up' | 'down' | null
  const lastScrollTop = useRef(window.pageYOffset);

  useEffect(() => {
    let timeoutId: number | undefined | NodeJS.Timeout = undefined;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop.current) {
        setDirection("down");
      } else if (currentScrollTop < lastScrollTop.current) {
        setDirection("up");
      }

      lastScrollTop.current = currentScrollTop;

      if (!isScrolling) {
        setIsScrolling(true);
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolling]);

  return { isScrolling, direction };
}
