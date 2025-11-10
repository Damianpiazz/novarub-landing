import { useState } from "react"

export function useHeaderMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev)
  const close = () => setIsOpen(false)

  return { isOpen, toggle, close }
}
