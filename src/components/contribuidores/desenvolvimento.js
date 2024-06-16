const ApresentacoesInfoAnaliseBig = [
  {
    titulo: "Do liDAR ao Tesla Vision",
    unidadeCurricular: "Analise de Dados e Big Data",
    descricao:
      "O projeto aborda os algoritmos Tesla Vision e LiDAR, ambos relacionados à empresa Tesla. Vamos explicar o que é cada um, as vantagens e desvantagens de cada tecnologia, e o motivo pelo qual a Tesla optou por abandonar o LiDAR.",
    integrantes: [
      "Eduardo Gomes,",
      "Fábio Nacif,",
      "Gabriel Hirle,",
      "Michel Prata,",
      "Paulo Junior,",
    ],
    hora: "08:50 às 09:50",
    dia: "Terça-feira, 18/06",
    sala: "201",
  },
  {
    titulo: "Features da Waymo",
    unidadeCurricular: "Analise de Dados e Big Data",
    descricao:
      "A Waymo é uma empresa líder em tecnologia de direção autônoma, cujas inovações prometem transformar a maneira como nos deslocamos. No entanto, no Brasil, a implementação da autonomia veicular enfrenta desafios únicos devido a questões como infraestrutura e regulamentação. Neste contexto, exploraremos as características da tecnologia da Waymo e as dificuldades específicas enfrentadas no Brasil.",
    integrantes: [
      "Lincoln Henrique,",
      "Eduardo Aguiar,",
      "Gabriel Furtado,",
      "Vinicius,",
      "Matheus",
    ],
    hora: "08:50 às 09:50",
    dia: "Terça-feira, 18/06",
    sala: "201",
  },
  {
    titulo: "Estado da arte dos carros autônomos no Brasil",
    unidadeCurricular: "Analise de Dados e Big Data",
    descricao:
      "O Brasil está em estágios iniciais de adoção e implementação de veículos autônomos, enfrentando desafios como infraestrutura, regulamentação e segurança. Este resumo analisa o estado atual da tecnologia de carros autônomos no país, destacando iniciativas, desafios e perspectivas futuras.",
    integrantes: [
      "Renato Araujo,",
      "Guilherme Neves,",
      "Rafael Dias,",
      "Andrey Rodrigues,",
      "Arthur Serafim,",
    ],
    hora: "08:50 às 09:50",
    dia: "Terça-feira, 18/06",
    sala: "201",
  },
];

export function ApresentacaoDadosBigData() {
  return (
    <>
      {ApresentacoesInfoAnaliseBig.map((info, index) => (
        <div key={index}>
          <ApresentacoesBigData
            titulo={info.titulo}
            descricao={info.descricao}
            unidadeCurricular={info.unidadeCurricular}
            integrantes={info.integrantes}
            hora={info.hora}
            dia={info.dia}
            sala={info.sala}
          />
        </div>
      ))}
    </>
  );
}

function ApresentacoesBigData({
  titulo,
  descricao,
  unidadeCurricular,
  integrantes = [],
  hora,
  dia,
  sala,
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
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {titulo}
        </h2>
        <p className="text-sm">
          Apresentação:{" "}
          <span className="text-purple-500 font-semibold">{dia}</span> das{" "}
          <span className="text-purple-500 font-semibold">{hora}</span> sala:{" "}
          <span className="text-purple-500 font-semibold">{sala}</span>
        </p>
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
          <div className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2">
            <SymplaButton />
          </div>
        </div>
      </div>
    </article>
  );
}
