'use client'

import { useEffect, useState } from "react";
import HeaderCarousel from "../HeaderCarousel";
import HeaderContent from "@/components/HeaderContent";
import HeaderNav from "@/components/HeaderNav";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // rolando para baixo
      } else {
        setShowHeader(true); // rolando para cima
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const HeaderCarouselProps = {
    slides: ["AGENDE 3 PAGUE 2: confira as especialidades", "slide 2", "slide 3"],
    options: { loop: true }
  };

  return (
    <header>
      <div className="h-[159.72px]" />
      <div
        className={`fixed top-0 bg-white w-full z-20 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <HeaderCarousel {...HeaderCarouselProps} />
        <HeaderContent />
        <HeaderNav />
      </div>
    </header>
  );
}