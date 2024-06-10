import { useInViewHook } from "@/utils/hooks/use-in-view.hook";
import { ArrowRight, GraduationCap } from "lucide-react";
import SymplaButton from "@/utils/ui/Sympla";

const ApresentacoesInfoEngSoft = [
  {
    titulo: "Track Cash",
    unidadeCurricular: "Eng. Software",
    descricao:
      "O TrackCash é um software inovador projetado para monitorar a taxa de câmbio de moedas internacionais, incluindo criptomoedas. Esta ferramenta é essencial para investidores, traders e qualquer pessoa interessada em acompanhar as flutuações do mercado de câmbio.",
    integrantes: [
      "Elias Silva,",
      "Matheus Lacerda,",
      "Carolina Silva,",
      "Nicholas James,",
      "Guilherme da Costa,",
      "Rafael Coura,",
      "Bruna Luiza,",
      "Victor Almeida",
    ],
    hora: "08:50 às 09:50",
    dia: "Sexta-feira, 21/06",
    sala: '901',
  },
  {
    titulo: "Pipo Filmes",
    unidadeCurricular: "Eng. Software",
    descricao:
      "Ajudar na busca por filmes entre os serviços de streaming, e realizar recomendações de filmes de acordo com os gostos e assinaturas do usuário.",
    integrantes: [
      "João Vitor De Sá,",
      "Carolina Vitória,",
      "Antônio Eustáquio,",
      "Luiz Henrique",
    ],
    hora: "08:50 às 09:50",
    dia: "Sexta-feira, 21/06",
    sala: '901',
  },
  {
    titulo: "Geek Owl",
    unidadeCurricular: "Eng. Software",
    descricao:
    "O GeekOwl é um site feito para catalogar animes e jogos existentes, reunindo informações sobre eles como duração, gênero, staff (diretor, dubladores, etc), prêmios e outras coisas. Ele também serve como uma lista que o usuário pode escolher e selecionar animes/jogos que ele já assistiu e salvar para assim ter um histórico de tudo que já viu e jogou, além de poder escolher seus favoritos, dar notas e conversar com outras pessoas sobre.",
    integrantes: [
      "Junio Alves batista dias,",
      "Ariadne kelly braz damasceno,",
      "Leandro Gusmão Mayrink,",
      "Gustavo Neves Braun",
    ],
    hora: "08:50 às 09:50",
    dia: "Sexta-feira, 21/06",
    sala: '901',
  },
  {
    titulo: "Geek Owl",
    unidadeCurricular: "Eng. Software",
    descricao:
    "O GeekOwl é um site feito para catalogar animes e jogos existentes, reunindo informações sobre eles como duração, gênero, staff (diretor, dubladores, etc), prêmios e outras coisas. Ele também serve como uma lista que o usuário pode escolher e selecionar animes/jogos que ele já assistiu e salvar para assim ter um histórico de tudo que já viu e jogou, além de poder escolher seus favoritos, dar notas e conversar com outras pessoas sobre.",
    integrantes: [
      "Junio Alves batista dias,",
      "Ariadne kelly braz damasceno,",
      "Leandro Gusmão Mayrink,",
      "Gustavo Neves Braun",
    ],
    hora: "08:50 às 09:50",
    dia: "Sexta-feira, 21/06",
    sala: '901',
  },
];

const ApresentacoesInfoAnaliseBig = [
  {
    titulo: "Do liDAR ao Tesla Vision",
    unidadeCurricular: "Analise de Dados e Big Data",
    descricao:
      "O projeto aborda os algoritmos Tesla Vision e LiDAR, ambos relacionados à empresa Tesla. Vamos explicar o que é cada um, as vantagens e desvantagens de cada tecnologia, e o motivo pelo qual a Tesla optou por abandonar o LiDAR.",
    integrantes: [
      "Eduardo Gomes,",
      "Fábio Nacif,",
      "gabriel Hirle,",
      "Michel Prata,",
      "Paulo Junior,",
    ],
    hora: "08:50 às 09:50",
    dia: "Terça-feira, 18/06",
    sala: '201',
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
    sala: '201',
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
    sala: '201',
  },
];

const ApresentacoesInfoCompGrafica = [
  {
    titulo: "Realidade Virtual - Casa UNA",
    unidadeCurricular: "Computação Gráfica e Realidade Virtual",
    descricao:
      "Os usuários podem desfrutar de uma experiência imersiva, explorando cada detalhe da Casa UNA em 360 graus e interagindo com elementos arquitetônicos.",
    integrantes: [
      "Lincoln Henrique,",
      "Eduardo Aguiar,",
      "Gabriel Furtado,",
      "Vinicius,",
      "Matheus",
    ],
    hora: "08:50 às 09:50",
    dia: "Quinta-feira, 20/06",
    sala: '1105',
  },
  {
    titulo: "Realidade Virtual - Entrada da Unidade Una Aimorés",
    unidadeCurricular: "Computação Gráfica e Realidade Virtual",
    descricao:
      "O projeto consiste na modelagem 3D do campus Aimorés, os usuários podem desfrutar de uma experiência imersiva do Hall de entrada do campus, abrangendo desde o início do campus até os elevadores e refeitório.",
      integrantes: [
        "Eduardo Gomes,",
        "Fábio Nacif,",
        "gabriel Hirle,",
        "Michel Prata,",
        "Paulo Junior,",
      ],
    hora: "08:50 às 09:50",
    dia: "Quinta-feira, 20/06",
    sala: '1105',
  },
  {
    titulo: "Realidade Virtual - FALTA COISAS",
    unidadeCurricular: "Computação Gráfica e Realidade Virtual",
    descricao:
    "O projeto consiste na modelagem 3D do campus Aimorés, os usuários podem desfrutar de uma experiência imersiva da lanchonete do campus, explorando cada detalhe e interagindo com elementos.",
    integrantes: [
    "Renato Araujo,",
    "Guilherme Neves,",
    "Rafael Dias,",
    "Andrey Rodrigues,",
   " Gabriel Hirle",
    ],
    hora: "08:50 às 09:50",
    dia: "Quinta-feira, 20/06",
    sala: '1105',
  },
]

const ApresentacoesInfoGovTi = [
  {
    titulo: "Plano Estratégico de TI",
    unidadeCurricular: "Governança e Serviços de TI",
    descricao:
      "Essa apresentação descreve o Plano Estratégico de Tecnologia da Informação (TI) da Indústria Arroz Kika. Este plano visa alinhar as iniciativas de TI com os objetivos de negócio da empresa, impulsionando a inovação, eficiência operacional e aprimoramento da competitividade no mercado.",
    integrantes: [
      "João Vitor Rodrigues dos Anjos ,",
      "Claúdia da Silva Reis,",
      "Italo Delfino Amaro,",
    ],
    hora: "10:30 às 11:30",
    dia: "Quinta-feira, 20/06",
    sala: '1106',
  },
]

export function ApresentacaoDadosEngSoft() {
  return (
    <>
      {ApresentacoesInfoEngSoft.map((info, index) => (
        <div key={index}>
          <ApresentacoesEngSoftware
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

export function ApresentacaoCompGrafica() {
  return (
    <>
      {ApresentacoesInfoCompGrafica.map((info, index) => (
        <div key={index}>
          <ApresentacoesCompGrafica
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

export function ApresentacaoGovTi() {
  return (
    <>
      {ApresentacoesInfoGovTi.map((info, index) => (
        <div key={index}>
          <ApresentacoeGovTi
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

function ApresentacoeGovTi({ titulo, descricao, unidadeCurricular, integrantes = [], hora, dia, sala }) {
  const {ref, inView} = useInViewHook(0.1);
  return (
    <article ref={ref} className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${inView && "animate-fade-up"}`}>
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <div className="space-y-1 mb-2">
      <h2 className="text-2xl font-bold tracking-tight text-white">{titulo}</h2>
      <p className="text-sm">Apresentação: <span className="text-purple-500 font-semibold">{dia}</span> das <span className="text-purple-500 font-semibold">{hora} </span> sala: <span className="text-purple-500 font-semibold">{sala}</span></p>
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
          <div
            className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2" >
            <SymplaButton />
          </div>
        </div>
      </div>
    </article>
  );
}

function ApresentacoesCompGrafica({ titulo, descricao, unidadeCurricular, integrantes = [], hora, dia, sala }) {
  const {ref, inView} = useInViewHook(0.1);
  return (
    <article ref={ref} className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${inView && "animate-fade-up"}`}>
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <div className="space-y-1 mb-2">
      <h2 className="text-2xl font-bold tracking-tight text-white">{titulo}</h2>
      <p className="text-sm">Apresentação: <span className="text-purple-500 font-semibold">{dia}</span> das <span className="text-purple-500 font-semibold">{hora} </span> sala: <span className="text-purple-500 font-semibold">{sala}</span></p>
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
          <div
            className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2" >
            <SymplaButton />
          </div>
        </div>
      </div>
    </article>
  );
}

function ApresentacoesBigData({ titulo, descricao, unidadeCurricular, integrantes = [], hora, dia, sala }) {
  const {ref, inView} = useInViewHook(0.1);
  return (
    <article ref={ref} className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${inView && "animate-fade-up"}`}>
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <div className="space-y-1 mb-2">
      <h2 className="text-2xl font-bold tracking-tight text-white">{titulo}</h2>
      <p className="text-sm">Apresentação: <span className="text-purple-500 font-semibold">{dia}</span> das <span className="text-purple-500 font-semibold">{hora}</span> sala: <span className="text-purple-500 font-semibold">{sala}</span></p>
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
          <div
            className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2" >
            <SymplaButton />
          </div>
        </div>
      </div>
    </article>
  );
}

function ApresentacoesEngSoftware({ titulo, descricao, unidadeCurricular, integrantes = [], hora, dia, sala }) {
  const {ref, inView} = useInViewHook(0.1);
  return (
    <article ref={ref} className={`p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md ${inView && "animate-fade-up"}`}>
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          {unidadeCurricular}
        </span>
      </div>
      <div className="space-y-1 mb-2">
      <h2 className="text-2xl font-bold tracking-tight text-white">{titulo}</h2>
      <p className="text-sm">Apresentação: <span className="text-purple-500 font-semibold">{dia}</span> das <span className="text-purple-500 font-semibold">{hora}</span> sala: <span className="text-purple-500 font-semibold">{sala}</span></p>
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
          <div
            className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline gap-2" >
            <SymplaButton />
          </div>
        </div>
      </div>
    </article>
  );
}