import HeaderCarousel from "../HeaderCarousel";
import HeaderContent from "@/components/HeaderContent";
import HeaderNav from "@/components/HeaderNav";

export default function Header() {
  const HeaderCarouselProps = {
    slides: ["AGENDE 3 PAGUE 2: confira as especialidades", "slide 2", "slide 3"],
    options: { loop: true }
  };

  return (
    <header>
      <div className="h-[159.72px]"/>
      <div className="fixed top-0 bg-white w-full z-20">
        <HeaderCarousel {...HeaderCarouselProps}/>
        <HeaderContent />
        <HeaderNav />
      </div>
    </header>
  );
}