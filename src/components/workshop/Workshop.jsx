import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ChevronRight, Share2, X } from "lucide-react";
import Apresentacao from "./workshoplist";
import Logo from '../../../public/images/Logo.jpeg';
import Link from "next/link";
import Image from "next/image";
import { useInViewHook } from "@/utils/hooks/use-in-view.hook";

export default function Workshop() {
  const { ref, inView } = useInViewHook(0.5);

  return (
    <section id="workshops" className="flex h-full min-h-screen flex-col md:flex-row">

      <div className="text-white md:hidden bg-purple-500/[0.3] pt-12 rounded-b-3xl text-center">
        <div className="flex gap-4 items-center justify-center py-16">
          <button className="absolute left-4 top-8 z-20 bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
            <Link href='/'>
              <ArrowLeft />
            </Link>
          </button>
          <Image src={Logo} width={90} height={120} className='rounded-xl' />
          <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
            Workshops
          </h2>
        </div>
      </div>

      <div className="hidden md:flex fixed top-0 z-20 left-0 h-full w-1/2 text-white bg-purple-500/[0.3] rounded-r-3xl">
        <div className="flex gap-4 items-center justify-center w-full">
          <button className="absolute left-4 top-4 z-20 bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
            <Link href='/'>
              <ArrowLeft size={18} />
            </Link>
          </button>
          <Image src={Logo} width={90} height={120} className='rounded-xl' />
          <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
            Workshops
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:ml-[50%] p-6 lg:px-16 text-white space-y-4 overflow-y-auto">
        <div ref={ref} className={`md:mt-16 ${inView && "animate-fade-right"}`}>
          <h1 className={`mb-5 text-3xl font-semibold `}>Aulas disponíveis</h1>
          <Link href={''}>Confira todas as entradas atraves do nosso <span className="text-purple-500 font-semibold">Sympla</span> </Link>
        </div>

        <Apresentacao />

      </div>
    </section>
  );
}
