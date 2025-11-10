import { HeaderNav } from "./HeaderNav"

interface HeaderMobileMenuProps {
  onClose: () => void
}

export function HeaderMobileMenu({ onClose }: HeaderMobileMenuProps) {
  return (
    <div className="md:hidden border-t">
      <HeaderNav variant="mobile" onLinkClick={onClose} />
    </div>
  )
}
