import { motion } from "framer-motion";
import Links from "./links";

import SymplaButton from "@/utils/ui/Sympla";

export function Main() {
  return (
    <motion.section id="expoUna" className="rounded-2xl pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }} >
      <div className="flex flex-col items-center pt-24">
        <span className="mb-6 text-3xl font-medium text-white">Expo Una</span>
        <span className="text-sm font-semibold mb-4 text-gray-300">Programação da ExpoUna das turmas de TI</span>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Links />
      </div>
      <div className="flex flex-col items-center pt-24">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-gray-300">Ingressos:</span>
          <SymplaButton />
        </div>
        <span className="text-sm font-semibold mb-4 text-gray-300">Participe para ganhar <span className="text-purple-500 font-bold">10h de extensão :)</span></span>
      </div>
    </motion.section>
  );
}
