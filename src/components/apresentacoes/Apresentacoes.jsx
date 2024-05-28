import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Logo from '../../../public/images/Logo.jpeg'
import Image from "next/image";
import ApresentacaoDados from "./ListaApresentacoes";
import { useInViewHook } from "@/utils/hooks/use-in-view.hook";

export function ApresentacoesLista() {
    const { ref, inView } = useInViewHook(0.5);

    return (
        <section id="apresentacoesLista" className="flex max-md:flex-col h-full min-h-screen">
            <div className="text-white md:hidden bg-purple-500/[0.3] pt-12 rounded-b-3xl text-center">
                <div className="flex gap-4 items-center justify-center py-16">
                    <button className="absolute left-4 top-[36px] z-20 bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
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

            <div className="hidden md:flex fixed h-full w-1/2 text-white bg-purple-500/[0.3] rounded-r-3xl">
                <div className="flex gap-4 items-center justify-center w-full">
                    <button className="absolute left-8 top-8 z-50 bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
                        <Link href='/'>
                            <ArrowLeft size={18} />
                        </Link>
                    </button>
                    <Image src={Logo} width={90} height={120} className='rounded-xl' />
                    <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
                        Apresentações
                    </h2>
                </div>
            </div>

            <div className="w-full md:w-1/2 md:ml-[50%] pt-6 px-6 lg:px-16 text-white space-y-4 overflow-y-auto">
                <section id="engenhariaSoftware" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Engenharia de Software</h1>
                    <ApresentacaoDados />
                </section>

                <section id="analiseDados" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Análise de Dados e BigData</h1>
                    <ApresentacaoDados />
                </section>

                <section id="ComputacaoGrafica" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Computação Gráfica e RV</h1>
                    <ApresentacaoDados />
                </section>

                <section id="ComputacaoGrafica2" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Computação Gráfica e RV</h1>
                    <ApresentacaoDados />
                </section>

            </div>
        </section>
    )
}