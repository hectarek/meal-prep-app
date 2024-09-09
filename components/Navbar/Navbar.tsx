"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChefHat, Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
	return (
		<header className="flex h-16 w-full items-center md:justify-around justify-between px-4 md:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<div className="grid gap-4 p-4">
						<Link href="#" className="font-medium hover:underline" prefetch={false}>
							Home
						</Link>
						<Link href="#" className="font-medium hover:underline" prefetch={false}>
							Features
						</Link>
						<Link href="#" className="font-medium hover:underline" prefetch={false}>
							Pricing
						</Link>
					</div>
				</SheetContent>
			</Sheet>
			<Link href="#" className="flex items-center" prefetch={false}>
				<ChefHat className="h-6 w-6" />
				<span className="sr-only">Acme Inc</span>
			</Link>
			<nav className="hidden items-center gap-6 text-sm font-medium md:flex">
				<Link href="#" className="hover:underline" prefetch={false}>
					Home
				</Link>
				<Link href="#" className="hover:underline" prefetch={false}>
					Features
				</Link>
				<Link href="#" className="hover:underline" prefetch={false}>
					Pricing
				</Link>
			</nav>
            <UserButton />

		</header>
	);
}
