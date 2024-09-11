"use client"

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ChefHat, Menu } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { menuLinks } from "."

export default function Navbar() {
  return (
    <header className="flex flex-shrink-0 h-16 w-full items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 p-4">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-medium hover:underline"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="flex items-center" prefetch={false}>
        <ChefHat className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="font-medium hover:underline"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <UserButton />
    </header>
  )
}
