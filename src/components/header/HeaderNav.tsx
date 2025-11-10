interface HeaderNavProps {
  variant?: "desktop" | "mobile"
  onLinkClick?: () => void
}

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#historia", label: "Historia" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
]

export function HeaderNav({ variant = "desktop", onLinkClick }: HeaderNavProps) {
  if (variant === "desktop") {
    return (
      <nav className="hidden md:flex gap-6">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="container py-4 flex flex-col space-y-4">
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md"
          onClick={onLinkClick}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
