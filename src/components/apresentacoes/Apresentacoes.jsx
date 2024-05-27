import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Logo from '../../../public/images/Logo.jpeg'
import Image from "next/image";
import ApresentacaoDados from "./ListaApresentacoes";
import { useInViewHook } from "@/hooks/use-in-view.hook";

export function ApresentacoesLista() {
    const {ref, inView} = useInViewHook(0.5);
      
    return (
        <section id="apresentacoesLista" className="flex max-md:flex-col h-full min-h-screen">
            <div className="text-white md:hidden bg-purple-500/[0.3] pt-12 rounded-b-3xl text-center">
                <div className="flex gap-4 items-center justify-center py-16">
                    <button className="absolute left-4 top-8 z-20 bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
                        <Link href='/'>
                            <ArrowLeft />
                        </Link>
                    </button>
                    <Image src={Logo} width={90} height={120} className='rounded-xl' />
                    <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
                       Apresentações
                    </h2>
                </div>
            </div>

            <div className="max-md:hidden text-white bg-purple-500/[0.3] rounded-r-3xl w-1/2">
                <div className="flex gap-4 items-center justify-center mt-[40%]">
                    <button className="absolute left-4 top-4 z-20 bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
                        <Link href='/'>
                            <ArrowLeft size={18} />
                        </Link>
                    </button>
                    <Image src={Logo} width={90} height={120} className='rounded-xl' />
                    <h2 className="text-center text-4xl font-bold leading-9 mt-1/2 text-gray-50">
                        Apresentaçoes
                    </h2>
                </div>
            </div>

            <section id="engenhariaSoftware" className="md:w-1/2 p-6 lg:px-16 text-white space-y-4">
                <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-up"}`}>Engenharia de Software</h1>
                <ApresentacaoDados />
            </section>
        </section>
    )
}