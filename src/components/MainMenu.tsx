import * as React from "react";
import ModeToggle from "@/components/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const MainMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="w-full px-4 py-2 border-b border-gray-200 bg-white flex items-center justify-between">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-indigo-700"
        >
          <img src="/favicon.svg" alt="Logo" className="h-8 w-8" />
          Proingenio
        </a>
      </div>
      {/* Botón hamburguesa en móvil */}
      <button
        className="md:hidden ml-auto"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        {open ? (
          <CloseIcon className="w-7 h-7" />
        ) : (
          <MenuIcon className="w-7 h-7" />
        )}
      </button>
      {/* Menú y toggles a la derecha */}
      <div
        className={`
          flex-col md:flex-row md:flex items-center gap-4
          fixed md:static top-0 right-0 h-full md:h-auto w-2/3 max-w-xs md:max-w-none bg-white md:bg-transparent shadow-lg md:shadow-none z-40
          transition-transform duration-200
          ${open ? "flex" : "hidden md:flex"}
        `}
      >
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-2 w-full">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#quienes-somos"
                className="w-full md:w-auto px-4 py-2"
              >
                Quienes somos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-full md:w-auto px-4 py-2">
                Departamentos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-2 min-w-[220px]">
                  <li>
                    <NavigationMenuLink
                      href="/departamentos#proyectos-actividades"
                      className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded"
                    >
                      Proyectos de actividades
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/departamentos#instalaciones-interiores"
                      className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded"
                    >
                      Instalaciones interiores
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/departamentos#infraestructuras"
                      className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded"
                    >
                      Infraestructuras
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/departamentos#asesoramiento"
                      className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded"
                    >
                      Asesoramiento e instaladores
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#proyectos"
                className="w-full md:w-auto px-4 py-2"
              >
                Proyectos destacados
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#contacto"
                className="w-full md:w-auto px-4 py-2"
              >
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="mt-4 md:mt-0">
          <ModeToggle />
        </div>
      </div>
      {/* Fondo oscuro al abrir menú en móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default MainMenu;