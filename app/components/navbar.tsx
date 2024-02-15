import Link from "next/link"
import { ModeToggle } from "./toggle"
import { UserButton } from "@clerk/nextjs"


export function Navbar() {
    
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">            
            <div className="container flex items-center justify-between w-full">
                <Link href="/">
                    <h1 className="font-bold text-2xl">Diploma</h1>
                </Link>

                <div className="flex items center gap-x-4">
                    

                    <div className="flex items-center gap-x-4">
                    <UserButton afterSignOutUrl="/" />
                    </div>
                    <ModeToggle />
                    </div>
            </div>
        </nav>
    )
}