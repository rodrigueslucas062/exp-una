import { motion } from "framer-motion";
import Links from "./links";
import Link from "next/link";

export function Main() {
  return (
    <motion.section id="expoUna" className="rounded-2xl pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }} >
      <div className="flex flex-col items-center pt-24">
        <span className="mb-6 text-3xl font-medium text-white">Expo Una</span>
        <span className="text-sm font-semibold mb-4 text-gray-300">Participe para ganhar <span className="text-purple-500 font-bold">10h de extensão</span></span> 
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Links />
      </div>
      <div className="flex flex-col items-center pt-6">
      <span className="text-sm font-semibold mb-4 text-gray-300">Programação da ExpoUna das turmas de TI</span>
      <span className="text-sm font-semibold mb-4 text-gray-300">Não deixe de conferir nosso <Link href={''} className="text-purple-500 font-bold">Sympla</Link></span>
      </div>
    </motion.section>
  );
}
