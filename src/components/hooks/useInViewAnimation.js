import { useEffect, useRef, useState } from "react";

export function useInViewAnimation(options = {}, canAnimate = true) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [canAnimate]);

  return { ref, isVisible };
}
