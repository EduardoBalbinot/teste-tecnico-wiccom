import HeaderCarousel from "./HeaderCarousel"

export default function Header() {
  const HeaderCarouselProps = {
    slides: [0, 1, 2, 3, 4],
    options: { loop: true }
  };

  return (
    <header>
      <HeaderCarousel {...HeaderCarouselProps}/>
      <h1>Site Header</h1>
    </header>
  );
}