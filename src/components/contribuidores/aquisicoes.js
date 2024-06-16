import { useInViewHook } from "@/utils/hooks/use-in-view.hook";
import { Ticket } from "lucide-react";

const ListaAquisicao = [
  {
    unidadeCurricular: "Sympla e certificados",
    descricao:
      "Equipe responsável pelos ingressos no Sympla e geração de certificados de participação",
    integrantes: [
      "Pedro Trajano,",
      "João ,",
      "Beatriz Lorrane,",
      "Lucas Rocha,",
      "Cláudia Reis",
    ],
  },
];

export function Aquisicoes() {
  return (
    <>
      {ListaAquisicao.map((info, index) => (
        <div key={index}>
          <AquisicoesStyle
            descricao={info.descricao}
            unidadeCurricular={info.unidadeCurricular}
            integrantes={info.integrantes}
          />
        </div>
      ))}
    </>
  );
}

function AquisicoesStyle({ descricao, unidadeCurricular, integrantes = []}) {
  const { ref, inView } = useInViewHook(0.1);
  return (
    <article ref={ref} className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${inView && "animate-fade-up"}`}>
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <Ticket size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <p className="mb-5 font-light text-gray-400">{descricao}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="font-medium text-white">Participantes:</span>
            {integrantes.map((integrante, index) => (
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
