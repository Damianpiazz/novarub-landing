import { HeaderLogo } from "./HeaderLogo"
import { HeaderNav } from "./HeaderNav"
import { HeaderToggle } from "./HeaderToggle"
import { HeaderMobileMenu } from "./HeaderMobileMenu"
import { useHeaderMenu } from "./useHeaderMenu"

export default function Header() {
  const { isOpen, toggle, close } = useHeaderMenu()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      {/* Barra principal */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Grupo izquierdo: logo */}
        <div className="flex items-center gap-3">
          <HeaderLogo />
        </div>

        {/* Grupo central: navegación desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <HeaderNav variant="desktop" />
        </div>

        {/* Grupo derecho: toggle móvil */}
        <div className="flex items-center gap-2 md:hidden">
          <HeaderToggle onToggle={toggle} />
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-16 w-full border-t border-border bg-background shadow-md animate-slideDown">
          <HeaderMobileMenu onClose={close} />
        </div>
      )}
    </header>
  )
}
