import { useEffect } from "react";

import React from "react";
import { useLocation } from "react-router-dom";

export default function AddParallax() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("simple-parallax-js/vanilla").then(
        ({ default: SimpleParallax }) => {
          const elements = document.querySelectorAll(".effect-paralax");

          if (elements.length > 0) {
            elements.forEach((element) => {
              new SimpleParallax(element, {
                delay: 0.5,
                orientation: "up",
                scale: 1.3,
                transition: "cubic-bezier(0.2, 0.8, 1, 1)",
                customContainer: "",
                customWrapper: "",
              });
            });
          }
        }
      );
    }
  }, [pathname]);

  return <></>;
}
