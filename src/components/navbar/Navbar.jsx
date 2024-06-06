import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Home, ChevronRight, Ellipsis, Share2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../../../public/images/Logo.jpeg';
import Link from "next/link";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const sectionNames = {
    expoUna: "ExpoUna",
    apresentacoesLista: "Apresentações",
    engenhariaSoftware: "Eng. de Software",
    analiseDados: "Analise de Dados e BigData",
    ComputacaoGrafica: "Computação Gráfica e RV",
    Governanca: "Gov. e Serviços de Ti",
    workshops: "Workshops",
    palestra: "Palestras",
};

export default function Navbar() {
    const [currentSection, setCurrentSection] = useState('')
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const pathname = usePathname();

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
        toast.success('Link copiado', {
            position: 'bottom-center',
            duration: 2000,
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = Array.from(document.querySelectorAll('section'))
            const scrollPosition = window.scrollY
            let closestSectionId = ''

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition + 100) {
                    closestSectionId = section.id
                }
            })

            setCurrentSection(sectionNames[closestSectionId] || "Expo Una")

            if (window.scrollY > 30) {
                setIsMenuVisible(true)
            } else {
                setIsMenuVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () =>
            window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="fixed flex top-4 w-full justify-center px-2 z-20 font-semibold text-white">
            <div className={`flex w-full lg:w-2/5 ring-1 ring-white bg-zinc-900/[0.6] items-center justify-between px-4 py-2 rounded-full backdrop-blur-sm transition-visible duration-500 ease-in-out ${isMenuVisible ? '' : 'invisible'}`}>
                <Link href="/" >
                    <Image src={Logo} className="ring-1 ring-white px-2 p-1 rounded-xl" width={50} height={50} />
                </Link>
                <span className="text-2xl">{currentSection}</span>

                <Dialog.Root currentSectionName={currentSection}>
                    <Dialog.Trigger className="visible bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
                        <Ellipsis />
                    </Dialog.Trigger>

                    <Dialog.Portal currentSectionName={currentSection}>
                        <Dialog.Overlay className="inset-0 fixed bg-black/20">
                            <Dialog.Content className="fixed z-50 inset-0 md:inset-auto max-md:top-[45%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[65vh] backdrop-blur-md bg-zinc-900/45 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
                                <motion.div
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "100%", opacity: 0 }}
                                    transition={{ duration: 0.5 }} >
                                    <Dialog.Close className="bg-zinc-900/60 p-1 rounded-full text-white ring-1 ring-zinc-900 absolute top-2 right-2">
                                        <X className="size-5" />
                                    </Dialog.Close>
                                    <div className="flex flex-col items-center gap-3 px-2 lg:px-4 pt-2">
                                        <div className="rounded-lg mt-8 lg:mt-8 justify-center inline-block w-3/4 lg:w-3/5 relative text-white">
                                            <div className='flex justify-center mb-8'>
                                                <span className="font-semibold text-lg">{currentSection}</span>
                                            </div>
                                            <div className="flex flex-col gap-5 space-y-4 lg:space-y-1.5 font-semibold">
                                                {
                                                    pathname !== "/" &&
                                                    <Link className="flex bg-gray-100/10 justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3"
                                                        href={"/"}
                                                    >
                                                        <Home />
                                                        <span>Retornar ao menu</span>
                                                        <ChevronRight />
                                                    </Link>
                                                }
                                                <button className="flex bg-gray-100/10 justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3"
                                                    onClick={handleCopyLink}>
                                                    <Share2 />
                                                    <span>Compartilhar link</span>
                                                    <ChevronRight />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div >
                            </Dialog.Content>
                        </Dialog.Overlay>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </nav>
    )
}