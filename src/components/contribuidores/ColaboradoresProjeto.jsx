import { ArrowLeft, Book } from "lucide-react";
import Link from "next/link";
import Logo from '../../../public/images/Logo.jpeg'
import Image from "next/image";
import { useInViewHook } from "@/utils/hooks/use-in-view.hook";
import { ListaInstrutores } from "./instrutores";
import { ListaDev } from "./desenvolvimento";
import { Aquisicoes } from "./aquisicoes";

export default function ColaboradoresProj() {
    const { ref, inView } = useInViewHook(0.5);

    return (
        <section id="ColaboradoresProj" className="flex max-md:flex-col h-full min-h-screen">
            <div className="text-white md:hidden bg-purple-500/[0.3] pt-12 rounded-b-3xl text-center">
                <div className="flex gap-4 items-center justify-center py-16">
                    <button className="absolute left-4 top-[36px] z-20 bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
                        <Link href='/'>
                            <ArrowLeft />
                        </Link>
                    </button>
                    <Image src={Logo} width={90} height={120} className='rounded-xl' />
                    <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
                        Contribuidores
                    </h2>
                </div>
            </div>

            <div className="hidden md:flex fixed h-full w-1/2 text-white bg-purple-500/[0.3] rounded-r-3xl">
                <div className="flex gap-4 items-center justify-center w-full">
                    <button className="md:invisible absolute left-4 top-4 z-20 bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
                        <Link href='/'>
                            <ArrowLeft size={18} />
                        </Link>
                    </button>
                    <Image src={Logo} width={90} height={120} className='rounded-xl' />
                    <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
                        Contribuidores
                    </h2>
                </div>
            </div>

            <div className="w-full md:w-1/2 md:ml-[50%] py-6 px-6 lg:px-16 text-white space-y-4 overflow-y-auto">
                <section className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-5 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Sobre o site</h1>
                    <span>Este site e organização da ExpoUna das turmas de TI do turno da manhã é nossa apresentação no evento. Consistia em organizar e gerenciar o desenvolvimento das exposições das outras turmas.</span>
                </section>
                <section id="projeto" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Gerente de Projetos</h1>
                    <article ref={ref} className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${inView && "animate-fade-up"}`}>
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
                                <Book size={14} />
                                Gerente de Projetos
                            </span>
                        </div>
                        <p className="mb-5 font-light text-gray-400">Responsável por gerir todas as equipes e organizar a execução do projeto</p>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-medium text-white">Participantes:</span>
                                    <span className="text-gray-400">
                                        Ana Thereza
                                    </span>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section id="devs" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Desenvolvedores</h1>
                    <ListaDev />
                </section>
                <section id="aquisicoes" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Sympla e certificados</h1>
                    <Aquisicoes />
                </section>
                <section id="instrutores" className="lg:px-16 text-white space-y-4">
                    <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Instrutores</h1>
                    <ListaInstrutores />
                </section>
            </div>
        </section >
    )
}