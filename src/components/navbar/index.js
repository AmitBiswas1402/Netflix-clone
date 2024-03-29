'use client'

import { useSession, useState } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"

export default function NavBar(){

    const {data: session} = useSession()
    const [isScrolled, setIsScrolled] = useState(false)
    const router = useRouter()
    const pathName = usePathname()

    const menuItems = [
        
    ]

    return <div className="relative">
        <header>
            
        </header>
    </div>
}