import Speaker from "../../public/images/Julian.png";
import Image from "next/image";

export default function Palestras() {
  return (
    <section
      id="palestra"
      className="flex items-center justify-center w-full min-h-screen text-white flex-col bg-gray-900 p-8 ring-1 rounded-md"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold animate-fade-down">
          Palestra Especial
        </h1>
        <p className="text-base text-gray-400 mt-2 animate-fade">
          Não perca esta oportunidade!
        </p>
      </div>

      {/* Speaker Information */}
      <div className="flex items-center flex-col gap-4 text-center animate-fade-right mb-6">
        <div className="flex flex-row gap-2 items-center justify-center">
          <h2 className="text-2xl">Palestrante:</h2>
          <p className="font-bold text-2xl bg-purple-500/[0.3] px-1.5 py-1 rounded-lg">
            Julian
          </p>{" "}
        </div>
        <p className="text-lg">
          Tema:{" "}
          <strong className="font-bold text-purple-400/[.75]">
            Inteligência Artificial
          </strong>
        </p>
      </div>

      {/* Speaker Image */}
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

      {/* Event Details */}
      <div className="text-center animate-fade-left">
        <p className="text-xl mb-4">Detalhes do Evento:</p>
        <p className="text-lg">
          Data:{" "}
          <span className="font-semibold text-purple-400">
            10 de Junho, 2024
          </span>
        </p>
        <p className="text-lg">
          Horário: <span className="font-semibold text-purple-400">14:00</span>
        </p>
        <p className="text-lg">
          Local:{" "}
          <span className="font-semibold text-purple-400">
            Auditório da Universidade
          </span>
        </p>
      </div>
    </section>
  );
}
