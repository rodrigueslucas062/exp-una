import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ChevronRight, Share2, X } from "lucide-react";
import Apresentacao from "./workshoplist";

export default function Workshop() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
      <div class="mx-auto max-w-screen-xl px-4 w-full">
        <h2 class="mb-4 font-bold text-xl text-white">Aulas disponiveis:</h2>
        <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <Dialog.Root>
            <div class="relative bg-zinc-100[0.03] backdrop-blur-sm flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
              <a
                href=""
                class="text-zinc-900 absolute z-30 top-2 right-0 mt-2 mr-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </a>
              <a href="" class="z-20 absolute h-full w-full top-0 left-0 ">
                &nbsp;
              </a>
              <div class="h-auto overflow-hidden">
                <div class="h-44 overflow-hidden relative"></div>
              </div>
              <div class="bg-white py-4 px-3">

               <Apresentacao/>
                <div class="flex justify-between items-center">
                  <p class="text-xs text-gray-400">
                    Lorem, ipsum dolor sit amet
                  </p>
                  <Dialog.Trigger class="relative z-40 flex items-center gap-2">
                    <span>Saiba mais</span>
                  </Dialog.Trigger>
                </div>
              </div>
            </div>

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
      </div>
    </div>
  );
}
