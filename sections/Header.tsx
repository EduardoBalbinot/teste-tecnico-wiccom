import HeaderCarousel from "../components/HeaderCarousel";
import HeaderContent from "@/components/HeaderContent";
import HeaderNav from "@/components/HeaderNav";

export default function Header() {
  const HeaderCarouselProps = {
    slides: ["AGENDE 3 PAGUE 2: confira as especialidades", "slide 2", "slide 3"],
    options: { loop: true }
  };

  const HeaderNavProps = {
    menus: [
      { label: "Consultas", submenus: [
          { label: "Clínica Geral", href: "/" },
          { label: "Pediatria", href: "/"},
      ]},
      { label: "Exames", submenus: [
          { label: "Exames Submenu 1", href: "/" },
          { label: "Exames Submenu 2", href: "/"},
      ]},
      { label: "Procedimentos", submenus: [
          { label: "Procedimentos Submenu 1", href: "/" },
          { label: "Procedimentos Submenu 2", href: "/"},
      ]},
      { label: "Cirurgias", submenus: [
          { label: "Cirurgias Submenu 1", href: "/" },
          { label: "Cirurgias Submenu 2", href: "/"},
      ]},
      { label: "Unidades", submenus: [
          { label: "Unidades Submenu 1", href: "/" },
          { label: "Unidades Submenu 2", href: "/"},
      ]},
      { label: "Quem Somos", href: "/" },
    ]
  }

  return (
    <header className="relative z-20">
      <HeaderCarousel {...HeaderCarouselProps}/>
      <HeaderContent name="Taila" />
      <HeaderNav {...HeaderNavProps}/>
    </header>
  );
}