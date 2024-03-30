'use client'

import { useSession, useState, useEffect } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"

export default function NavBar(){

    const {data: session} = useSession()
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter()
    const pathName = usePathname()

    const menuItems = [
        {
            id: "home",
            title: "Home",
            path: "/browse",
          },
          {
            id: "tv",
            title: "TV",
            path: "/tv",
          },
          {
            id: "movies",
            title: "Movies",
            path: "/movies",
          },
          {
            id: "my-list",
            title: "My List",
            path: `/my-list`,
          },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setIsScrolled(true);
            else setIsScrolled(false);
        }
        window.addEventListener('scroll', handleScroll)

        window.removeEventListener('scroll', handleScroll)
    }, [])
    

    return <div className="relative">
        <header className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#141414]`}>
            
        </header>
    </div>
}