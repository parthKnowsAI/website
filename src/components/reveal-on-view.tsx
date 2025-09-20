"use client";

import React, { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type RevealOnViewProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  style?: CSSProperties;
  intensity?: "soft" | "hero";
  staggerChildren?: boolean;
};

export default function RevealOnView({
  as = "div",
  className = "",
  children,
  delay = 0,
  style,
  intensity = "soft",
  staggerChildren = false,
}: RevealOnViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const Tag = as as React.ElementType;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const getTransformValues = () => {
    const translateY = intensity === "hero" ? "28px" : "18px";
    const scale = intensity === "hero" ? "0.965" : "0.98";
    const blur = intensity === "hero" ? "16px" : "10px";

    return { translateY, scale, blur };
  };

  const { translateY, scale, blur } = getTransformValues();

  const baseStyles: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translateY(0px) scale(1)"
      : `translateY(${translateY}) scale(${scale})`,
    filter: isVisible ? "blur(0px)" : `blur(${blur})`,
    transition: "all 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
    ...style,
  };

  const staggerStyles: CSSProperties = staggerChildren
    ? {
        ...baseStyles,
        opacity: 1,
        transform: "none",
        filter: "none",
      }
    : baseStyles;

  // If staggering children, add styles to each child
  const processedChildren = staggerChildren
    ? React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const childDelay = isVisible ? index * 0.2 : 0;
        const childStyles: CSSProperties = {
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0px) scale(1)"
            : `translateY(${translateY}) scale(${scale})`,
          filter: isVisible ? "blur(0px)" : `blur(${blur})`,
          transition: `all 1.5s cubic-bezier(0.22, 1, 0.36, 1)`,
          transitionDelay: `${childDelay}s`,
        };

        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...childStyles,
          },
        });
      })
    : children;

  return (
    <Tag ref={ref} className={className} style={staggerStyles}>
      {processedChildren}
    </Tag>
  );
}
