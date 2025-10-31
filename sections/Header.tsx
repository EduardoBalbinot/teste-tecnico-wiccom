import HeaderCarousel from "../components/HeaderCarousel";
import HeaderContent from "@/components/HeaderContent";

export default function Header() {
  const HeaderCarouselProps = {
    slides: ["AGENDE 3 PAGUE 2: confira as especialidades", "slide 2", "slide 3"],
    options: { loop: true }
  };

  return (
    <header>
      <HeaderCarousel {...HeaderCarouselProps}/>
      <HeaderContent name="Taila" />
    </header>
  );
}