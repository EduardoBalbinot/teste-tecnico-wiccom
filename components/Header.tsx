import HeaderCarousel from "./HeaderCarousel"

export default function Header() {
  const HeaderCarouselProps = {
    slides: ["AGENDE 3 PAGUE 2: confira as especialidades", "slide 2", "slide 3"],
    options: { loop: true }
  };

  return (
    <header>
      <HeaderCarousel {...HeaderCarouselProps}/>
      <h1>Site Header</h1>
    </header>
  );
}