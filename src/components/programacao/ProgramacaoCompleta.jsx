import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/Logo.jpeg';

const apresentacoesEngSoft = [
  {
    unidadeCurricular: "Eng. Software",
    hora: "08:50 às 09:50",
    sala: '901',
    dia: "Sexta-feira, 21/06",
  },
];

const apresentacoesAnaliseBig = [
  {
    unidadeCurricular: "Analise de Dados e Big Data",
    hora: "08:50 às 09:50",
    sala: '201',
    dia: "Terça-feira, 18/06",
  },
];

const apresentacoesCompGrafica = [
  {
    unidadeCurricular: "Computação Gráfica e Realidade Virtual",
    hora: "08:50 às 09:50",
    sala: '1105',
    dia: "Quinta-feira, 20/06",
  },
];

const apresentacoesGovTi = [
  {
    unidadeCurricular: "Governança e Serviços de TI",
    hora: "10:30 às 11:30",
    sala: '1106',
    dia: "Quinta-feira, 20/06",
  },
];

const lista = [
  {
    titulo: "HTML e CSS",
    unidadeCurricular: "HTML e CSS",
    hora: "08:50 às 09:50",
    sala: "1105",
    dia: "Segunda-feira, 17/06",
  },
  {
    titulo: "Git",
    unidadeCurricular: "Git",
    hora: "10:30 às 11:30",
    sala: "1106",
    dia: "Segunda-feira, 17/06",
  },
  {
    titulo: "SQL",
    unidadeCurricular: "SQL",
    hora: "10:30 às 11:30",
    sala: "1105",
    dia: "Terça-feira, 18/06",
  },
  {
    titulo: "Excel",
    unidadeCurricular: "Excel",
    hora: "10:30 às 11:30",
    sala: "1105",
    dia: "Sexta-feira, 21/06",
  },
  {
    titulo: "Blender",
    unidadeCurricular: "Blender",
    hora: "10:30 às 11:30",
    sala: "206",
    dia: "Quarta-feira, 19/06",
  },
];

const ApresentacoesInfo = [
  ...apresentacoesEngSoft,
  ...apresentacoesAnaliseBig,
  ...apresentacoesCompGrafica,
  ...apresentacoesGovTi,
  ...lista.map(item => ({
    unidadeCurricular: item.unidadeCurricular,
    hora: item.hora,
    sala: item.sala,
    dia: item.dia,
  })),
];

export default function ProgramacaoCompleta() {
  const diasDaSemana = [
    "Segunda-feira, 17/06",
    "Terça-feira, 18/06",
    "Quarta-feira, 19/06",
    "Quinta-feira, 20/06",
    "Sexta-feira, 21/06"
  ];

  return (
    <section id="programacao" className="flex flex-col h-full min-h-screen">
      <div className="text-white md:hidden bg-purple-500/[0.3] pt-12 rounded-b-3xl text-center">
        <div className="flex gap-4 items-center justify-center py-16">
          <button className="absolute left-4 top-[36px] z-20 bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
            <Link href='/'>
              <ArrowLeft />
            </Link>
          </button>
          <Image src={Logo} width={90} height={120} className='rounded-xl' />
          <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
            Programação
          </h2>
        </div>
      </div>

      <div className="hidden md:flex fixed h-full w-1/2 text-white bg-purple-500/[0.3] rounded-r-3xl">
        <div className="flex gap-4 items-center justify-center w-full">
          <button className="md:invisible absolute left-4 top-4 z-20 bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
            <Link href='/'>
              <ArrowLeft size={18} />
            </Link>
          </button>
          <Image src={Logo} width={90} height={120} className='rounded-xl' />
          <h2 className="text-center text-4xl font-bold leading-9 text-gray-50">
            Programação
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:ml-[50%] py-6 px-6 lg:px-16 text-white space-y-4 overflow-y-auto md:pt-24">
        {diasDaSemana.map(dia => {
          const apresentacoesDoDia = ApresentacoesInfo.filter(apresentacao => apresentacao.dia === dia);
          return (
            <div key={dia} className="mb-6">
              <h3 className="text-2xl font-bold mb-4">{dia}</h3>
              {apresentacoesDoDia.length > 0 ? (
                apresentacoesDoDia.map((apresentacao, index) => (
                  <div key={index} className="mb-4 p-4 bg-zinc-800 rounded-lg">
                    <p className="text-lg"><strong>Unidade Curricular:</strong> {apresentacao.unidadeCurricular}</p>
                    <p><strong>Hora:</strong> {apresentacao.hora}</p>
                    <p><strong>Sala:</strong> {apresentacao.sala}</p>
                  </div>
                ))
              ) : (
                <div className="mb-4 p-4 bg-zinc-800 rounded-lg">
                  <p className="text-lg">Nenhuma apresentação programada.</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
