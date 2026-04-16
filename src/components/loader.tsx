"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const countRef = useRef(0);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const finishLoader = useCallback(() => {
    setTimeout(() => {
      gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          onCompleteRef.current?.();
        },
      });
    }, 200);
  }, []);

  useEffect(() => {
    let raf: number;

    const update = () => {
      countRef.current += Math.floor(Math.random() * 15) + 1;
      if (countRef.current > 100) countRef.current = 100;
      setCount(countRef.current);

      if (countRef.current < 100) {
        raf = requestAnimationFrame(update);
      } else {
        finishLoader();
      }
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [finishLoader]);

  const display = count < 10 ? `0${count}` : String(count);

  return (
    <div id="loader" ref={loaderRef}>
      <div className="counter">{display}</div>
    </div>
  );
}
