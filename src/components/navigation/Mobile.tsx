"use client"

import Link from "next/link"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

type MenuItem = {
  title: string
  href: string
}

const MENU_ITEMS: MenuItem[] = [
  { title: "Página Inicial", href: "/" },
  { title: "Quem sou", href: "/#bio" },
  { title: "Especialidades", href: "/especialidades" },
  { title: "Contato", href: "/#contact" },
]

export const MobileNavigation = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [pathname, searchParams])

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 bg-background border-r border-border">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-semibold tracking-tight text-primary">
              Navegação
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col space-y-3">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                scroll={false}
                className="px-4 py-2 rounded-xl hover:bg-muted text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
