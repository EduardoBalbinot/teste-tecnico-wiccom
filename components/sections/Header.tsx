import HeaderCarousel from "../HeaderCarousel";
import HeaderContent from "@/components/HeaderContent";
import HeaderNav from "@/components/HeaderNav";

export default function Header() {
  const HeaderCarouselProps = {
    slides: ["AGENDE 3 PAGUE 2: confira as especialidades", "slide 2", "slide 3"],
    options: { loop: true }
  };

  return (
    <header className="relative z-20">
      <HeaderCarousel {...HeaderCarouselProps}/>
      <HeaderContent />
      <HeaderNav />
    </header>
  );
}