import { ArrowRight, GraduationCap } from "lucide-react";

const ApresentacoesInfo = [
  {
    titulo: "Track Cash",
    unidadeCurricular: "Eng. Software",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure soluta esse reprehenderit quae magni, perferendis, nobis voluptas eos saepe a,et voluptatibus quo non illo labore ducimus quis? Ducimus, non!",
    integrantes: [
      "Elias Silva",
      "Matheus Lacerda",
      "Carolina Silva",
      "Nicholas James",
      "Guilherme da Costa",
      "Rafael Coura",
      "Bruna Luiza",
      "Victor Almeida",
    ],
  },
  {
    titulo: "Pipo Filmes",
    unidadeCurricular: "Eng. Software",
    descricao:
      "Ajudar na busca por filmes entre os serviços de streaming, e realizar recomendações de filmes de acordo com os gostos e assinaturas do usuário.",
    integrantes: [
      "João Vitor De Sá",
      "Carolina Vitória",
      "Antônio Eustáquio",
      "Luiz Henrique",
    ],
  },
];

export default function ApresentacaoDados() {
  return (
    <>
      {ApresentacoesInfo.map((info, index) => (
        <div key={index}>
          <ApresentacoesEngSoftware
            titulo={info.titulo}
            descricao={info.descricao}
            unidadeCurricular={info.unidadeCurricular}
            integrantes={info.integrantes}
          />
        </div>
      ))}
    </>
  );
}

function ApresentacoesEngSoftware({
  titulo,
  descricao,
  unidadeCurricular,
  integrantes = [],
}) {
  return (
    <article className="p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {titulo}
      </h2>
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
          <a
            href="#"
            className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2" >
            Ver mais
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}