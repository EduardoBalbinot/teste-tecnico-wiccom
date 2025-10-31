interface ISubMenu {
  label: string;
  href?: string;
}

interface IMenu extends ISubMenu {
  submenus?: IMenu[];
}

interface Props {
  menus?: IMenu[];
}

export default function HeaderNav({ menus = [] }: Props) {
  return (
    <nav className="border-t border-b border-[#F1F1F1] px-10 font-semibold text-sm text-[#404042] relative">
      <ul className="flex justify-center gap-8 tracking-[-0.28px]">
        {menus.map((menu, index) => (<li key={index} className="flex px-2 group pb-3 pt-3.5 relative">
          <a className="px-4 flex gap-2 cursor-pointer" href={menu.href || "/"}>
            {menu.label}
            {menu.submenus && <img src="/images/UI/arrowdown.svg" alt="Seta para baixo" />}
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
          </a>
          
        </li>))}
      </ul>
    </nav>
  );
}