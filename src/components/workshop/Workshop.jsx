import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Share2, X } from "lucide-react";
import Apresentacao from "./workshoplist";
import Logo from '../../../public/images/Logo.jpeg';
import Link from "next/link";
import Image from "next/image";
import { useInViewHook } from "@/hooks/use-in-view.hook";

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

      <div className="hidden md:flex fixed top-0 left-0 h-full w-1/2 text-white bg-purple-500/[0.3] rounded-r-3xl">
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
        <h1 ref={ref} className={`mb-10 md:mt-16 text-3xl font-semibold ${inView && "animate-fade-right"}`}>Aulas disponíveis</h1>
        <Dialog.Root>
          <Apresentacao />
          <Dialog.Portal>
            <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
              <Dialog.Content className="fixed z-50 inset-0 md:inset-auto max-md:top-[45%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[65vh] backdrop-blur-md bg-zinc-900/45 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Dialog.Close className="bg-zinc-900/60 p-1 rounded-full text-white ring-1 ring-zinc-900 absolute top-2 right-2">
                    <X className="size-5" />
                  </Dialog.Close>
                  <div className="flex flex-col items-center gap-3 px-2 lg:px-4 pt-2">
                    <div className="rounded-lg mt-8 lg:mt-8 justify-center inline-block w-3/4 lg:w-3/5 relative text-white">
                      <div className="flex justify-center mb-8">
                        <span className="font-semibold text-lg">aaaaa</span>
                      </div>
                      <div className="flex flex-col bg-gray-100/10 space-y-4 lg:space-y-1.5 font-semibold">
                        <button className="flex justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3">
                          <Share2 />
                          <span>Compartilhar link</span>
                          <ChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.DialogOverlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
