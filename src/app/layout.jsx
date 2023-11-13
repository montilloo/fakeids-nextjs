import { Inter as FontSans } from "next/font/google"
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/Header";

import './globals.css'

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})
export const metadata = {
	title: 'FakeIds',
	description: 'FakeIds App',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={cn(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable
			)}>
				<div className={'bg-[#f1f1f1] py-2.5'}>
					<div className={'container flex justify-center md:justify-start h-5 items-center space-x-4 text-sm'}>
						<Link href={'/about'}>
							About
						</Link>
						<Separator orientation="vertical" />
						<Link href={'/faq'}>
							FAQ's
						</Link>
						<Separator orientation="vertical" />
						<Link href={''}>Contact</Link>
					</div>
				</div>
				<Header />
				{children}
			</body>
		</html>
	)
}
