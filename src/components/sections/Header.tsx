import Link from "next/link"
export default function Header() {
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="text-4xl font-semibold">Akshay Singh<span className="text-accent">.</span></Link>
                <div className="hidden xl:flex items-center gap-8">
                    <nav className="flex gap-8">
                        <Link href={"/"} className="text-accent border-b-2 border-accent capitalize font-medium hover:text-accent
                        transition-all">
                            Professional
                        </Link>
                        <Link href={"/personal"} className="false capitalize font-medium hover:text-accent transition-all">
                            Personal
                        </Link>
                        <Link href={"/contact"} className="false capitalize font-medium hover:text-accent transition-all">
                            Contact
                            </Link>
                    </nav>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[44px] px-6">Download Resume</button>
                </div>

                <div className="xl:hidden">
                    <button className="flex justify-center items-center "></button>
                </div>
            </div>
        </header>
    )
}