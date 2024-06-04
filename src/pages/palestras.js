import { ArrowLeft } from "lucide-react";
import Speaker from "../../public/images/Julian.png";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/images/Logo.jpeg'

export default function Palestras() {
  return (
    <section id="palestra" className="flex max-md:flex-col h-full min-h-screen">
      <div className="text-white md:hidden bg-purple-500/[0.3] pt-12 rounded-b-3xl text-center">
        <div className="flex gap-4 items-center justify-center py-16">
          <Image src={Logo} width={90} height={120} className='rounded-xl' />
          <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
            Apresentações
          </h2>
        </div>
      </div>
      <Link href={"/"} className="absolute left-8 top-8 z-50 bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
        <ArrowLeft size={18} />
      </Link>
      <div className="hidden md:flex fixed h-full w-1/2 text-white bg-purple-500/[0.3] rounded-r-3xl">
        <div className="flex gap-4 items-center justify-center w-full">
          <Image src={Logo} width={90} height={120} className='rounded-xl' />
          <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
            Palestras
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:ml-[50%] pt-6 px-6 lg:px-16 text-white space-y-4 overflow-y-auto">
        <div
          className="flex items-center justify-center w-full min-h-screen text-white flex-col p-8 rounded-md"
        >
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold animate-fade-down">
              Palestra Especial
            </h1>
            <p className="text-base text-gray-400 mt-2 animate-fade">
              Não perca esta oportunidade!
            </p>
          </div>

          <div className="flex items-center flex-col text-center animate-fade-right mb-6">
            <div className="flex flex-row gap-2 items-center justify-center">
              <h2 className="text-2xl">Palestrante:</h2>
              <p className="font-bold text-2xl bg-purple-500/[0.3] px-1.5 py-1 rounded-lg">
                Julian Faria
              </p>{" "}
            </div>
            <p className="text-lg mt-4">
              Tema:{" "}
              <strong className="font-bold text-purple-400/[.75]">
                Direito Digital IA
              </strong>
            </p>
          </div>

          <div className="relative flex items-center justify-center animate-fade-up mb-8">
            <div className="bg-purple-500/[0.3] duration-300 grayscale-[40%] rounded-full w-52 h-52" />
            <Image
              src={Speaker}
              alt="palestrante"
              className="grayscale-[50%] rounded-full absolute"
              height={0}
              width={0}
            />
          </div>

          <div className="text-center animate-fade-left">
            <p className="text-xl mb-4">Detalhes do Evento:</p>
            <p className="text-lg">
              Data:{" "}
              <span className="font-semibold text-purple-400">
                Quarta-feira, 19/06
              </span>
            </p>
            <p className="text-lg">
              Horário: <span className="font-semibold text-purple-400">8:50h às 10h</span>
            </p>
            <p className="text-lg">
              Local:{" "}
              <span className="font-semibold text-purple-400">
                Sala 503
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}