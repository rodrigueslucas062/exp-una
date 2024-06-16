import { useInViewHook } from "@/utils/hooks/use-in-view.hook";
import { GraduationCap } from "lucide-react";

const Instrutores = [
  {
    unidadeCurricular: "Instrutores",
    descricao: 'Lista de instrutores dos Workshops fornecidos',
    instrutores: [
      "Lucas Rodrigues,",
      "Lucas Candelário,",
      "Breno Felipe,",
      "Mariana Vilela,",
      "Cláudio,",
      "Mike Wolner,",
    ],
  },
];

export function ListaInstrutores() {
  return (
    <>
      {Instrutores.map((info, index) => (
        <div key={index}>
          <ListaInstrutoresStyle
            descricao={info.descricao}
            unidadeCurricular={info.unidadeCurricular}
            instrutores={info.instrutores}
            hora={info.hora}
            dia={info.dia}
            sala={info.sala}
          />
        </div>
      ))}
    </>
  );
}

function ListaInstrutoresStyle({
  descricao,
  unidadeCurricular,
  instrutores = [],
}) {
  const { ref, inView } = useInViewHook(0.1);
  return (
    <article
      ref={ref}
      className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${
        inView && "animate-fade-up"
      }`}
    >
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <div className="space-y-1 mb-2">
      </div>
      <p className="mb-5 font-light text-gray-400">{descricao}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="font-medium text-white">Participantes:</span>
            {instrutores.map((integrante, index) => (
              <span key={index} className="text-gray-400">
                {integrante}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
