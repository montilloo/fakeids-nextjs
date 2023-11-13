"use client";

import { useState  } from "react";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import {HamburgerMenuIcon, Cross1Icon, BackpackIcon } from "@radix-ui/react-icons"
import { NavLinks } from './NavLinks'
import { Hanalei } from "next/font/google";


export function Header() {

	let [open, setOpen] = useState(false);

	return (
		<header>
			<nav>
				<div className='container relative z-50 flex justify-between py-8'>
					<div className="relative z-10 flex items-center gap-16">
						<Link href="/" aria-label="Home">
							FakeIds
						</Link>
						<div className="hidden lg:flex lg:gap-10">
							<NavLinks />
						</div>
					</div>
					<div className="flex items-center gap-6 lg:hidden">
						<Popover >
							<PopoverTrigger asChild>
								<Button variant="outline" size="icon">
									{
										open ? (<Cross1Icon />) : (<HamburgerMenuIcon />)
									}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-80">
								
							</PopoverContent>
						</Popover>
					</div>
					<div className="hidden lg:block">
						<Button variant={'link'}>
							CART(0)<BackpackIcon className=" ml-2 "/>
						</Button>
					</div>
				</div>
			</nav>
		</header>
	)
}