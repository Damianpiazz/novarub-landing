import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderToggleProps {
  onToggle: () => void
}

export function HeaderToggle({ onToggle }: HeaderToggleProps) {
  return (
    <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggle}>
      <Menu className="h-6 w-6" />
      <span className="sr-only">Abrir menú</span>
    </Button>
  )
}
