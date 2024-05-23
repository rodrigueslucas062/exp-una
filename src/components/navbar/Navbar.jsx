import { Ellipsis } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../../../public/images/Logo.jpeg'
import Link from "next/link";

export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsMenuVisible(true)
            } else {
                setIsMenuVisible(true)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () =>
            window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="fixed flex top-4 w-full justify-center px-2 z-10 font-semibold">
            <div className={`flex w-full lg:w-2/5 border-2 border-zinc-900 bg-gray-50/70 items-center justify-between px-4 py-2 rounded-full backdrop-blur-sm transition-visible duration-500 ease-in-out ${isMenuVisible ? '' : 'invisible'}`}>
                <Link href="/" >
                    <Image src={Logo} className="ring-2 ring-zinc-900 px-2 p-1 rounded-xl" width={50} height={50} />
                </Link>
                <span className="text-2xl">
                    Expo Una
                </span>
                <div className="bg-white rounded-full p-2">
                    <Ellipsis />
                </div>
            </div>
        </nav>
    )
}