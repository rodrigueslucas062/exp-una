import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ChevronRight, Share2, X } from "lucide-react";
import Apresentacao from "./workshoplist";

export default function Workshop() {
  return (
    <section id="workshops" class="flex min-h-screen flex-col overflow-hidden py-6 sm:py-12 bg-zinc-900">
      <div class="mx-auto max-w-screen-xl px-4 w-full">
        <h2 class="mb-4 font-bold text-xl text-white pt-20 pb-4">Aulas disponiveis:</h2>

        <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
