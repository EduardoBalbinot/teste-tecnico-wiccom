export default function HeaderNav() {

  const menus = [
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
    
  return (
    <nav className="border-t border-b border-[#F1F1F1] px-10 font-semibold text-sm text-[#404042] relative">
      <ul className="flex justify-center gap-8 tracking-[-0.28px]">
        {menus.map((menu, index) => (<li key={index} className="flex px-2 group pb-3 pt-3.5 relative hover:text-[#056939]">
          <a className="px-4 flex gap-2 cursor-pointer items-center" href={menu.href || "/"}>
            {menu.label}
            {menu.submenus && <img src="/images/UI/arrowdown.svg" alt="Seta para baixo" width={8}/>}
          </a>
          {menu.submenus && <div
            className="min-h-28 w-full z-10 absolute top-full left-0 hidden group-hover:block opacity-0 group-hover:opacity-100">
              <div className="bg-white shadow-lg flex flex-col p-4 gap-3">
                {menu.submenus.map((submenu, subIndex) => (
                  <a
                    key={subIndex}
                    className="hover:underline"
                    href={submenu.href || "/"}
                  >
                    {submenu.label}
                  </a>
                ))}
              </div>
          </div>}
        </li>))}
      </ul>
    </nav>
  );
}