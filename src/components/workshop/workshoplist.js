import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ChevronRight, Library, X } from "lucide-react";
import Image from "next/image";
import * as Images from "../../utils/images.js";
import SymplaButton from "@/utils/ui/Sympla.js";
import { toast } from "sonner";

const lista = [
  {
    img: Images.Html,
    titulo: "HTML e CSS",
    descricao:
      "Use HTML e CSS para estruturar seus sites. Crie designs incríveis e personalizados com CSS, dando vida às suas páginas.",
    sala: "1105",
    horario: "08:50-09:50",
    dia: "Segunda-feira, 17/06",
  },
  {
    img: Images.Git,
    titulo: "Git",
    descricao:
      "Torne-se um especialista em Git, a ferramenta essencial para controle de versão de software. Aprenda a trabalhar em equipe com eficiência, rastreando alterações e versionamento do seu código.",
    sala: "1106",
    horario: "10:30-11:30",
    dia: "Segunda-feira, 17/06",
  },
  {
    img: Images.Sql,
    titulo: "SQL",
    descricao:
      "Domine a linguagem SQL para gerenciar e consultar bancos de dados. Aprenda a armazenar, organizar e recuperar informações com maestria.",
    sala: "1105",
    horario: "10:30-11:30",
    dia: "terça-feira, 18/06",
  },
  {
    img: Images.Excel,
    titulo: "Excel",
    descricao:
      "Transforme-se em um mestre de planilhas com o Excel. Aprenda a organizar, analisar e visualizar dados de forma eficiente, otimizando seu tempo e trabalho.",
    sala: "1105",
    horario: "10:30-11:30",
    dia: "Sexta-feira 21/06",
  },
  {
    img: Images.Blender,
    titulo: "Blender",
    descricao:
      "Dê vida à sua imaginação com o Blender, um software de modelagem 3D gratuito e poderoso. Aprenda os fundamentos da criação de modelos 3D, animações e efeitos visuais.",
    sala: "206",
    horario: "10:30-11:30",
    dia: "Quarta-feira 19/06",
  },
];

function DetalhesWorkshop({ titulo }) {
  const Html = '/material/Html.pdf'
  const Git = '/material/Git.pdf'
  const SQL = '/material/SQL.pdf'
  const Excel = '/material/Excel.pdf'
  const Blender = '/material/Blender.pdf'

  switch (titulo) {
    case "HTML e CSS":
      return (
        <div className="pb-6 space-y- items-center4">
          <button className="flex w-[95%] justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3" onClick={handleClick} >
            <Library />
            <span>Material complementar</span>
            <ChevronRight />
          </button>
          <p>
            HTML é a linguagem de{" "}
            <span className="text-purple-500 font-bold">
              marcação utilizada para estruturar o conteúdo na web
            </span>{" "}
            . Ele define a
            {" "}<span className="text-purple-500 font-bold">
              semântica dos elementos
            </span>{" "}
            que compõem uma página, como parágrafos, cabeçalhos, e muito mais.
            {" "}<span className="text-purple-500 font-bold">
              HTML usa tags para encapsular diferentes partes do conteúdo
            </span>{" "}
            , permitindo que os navegadores exibam o conteúdo de forma
            organizada. CSS
            {" "}<span className="text-purple-500 font-bold">
              é a linguagem de estilo utilizada para definir a aparência e o
              layout
            </span>{" "}
            das páginas web. Com CSS, você pode controlar aspectos visuais como
            cores, fontes, espaçamento, alinhamento e disposição dos elementos
            na tela. CSS permite a separação entre o conteúdo (HTML) e a
            apresentação visual, facilitando a manutenção e a atualização do
            design de um site.
            {" "}<span className="text-purple-500 font-bold">
              CSS é aplicado aos elementos HTML através de seletores
            </span>{" "}
            que podem ser baseados em
            {" "}<span className="text-purple-500 font-bold">
              tags, classes, IDs ou atributos
            </span>{" "}
            .
          </p>
        </div>
      );
    case "Git":
      return (
        <div className="pb-6 space-y-4 items-center">
          <button className="flex w-[95%] justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3" onClick={handleClick} >
            <Library />
            <span>Material complementar</span>
            <ChevronRight />
          </button>
          <p>
            Torne-se um especialista em Git, a ferramenta essencial para
            controle de versão de software. Aprenda a trabalhar em equipe com
            eficiência, rastreando alterações e versionamento do seu código.
          </p>
        </div>
      );
    case "SQL":
      return (
        <div className="pb-6 space-y-4 items-center">
          <button className="flex w-[95%] justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3" onClick={handleClick} >
            <Library />
            <span>Material complementar</span>
            <ChevronRight />
          </button>
          <p>
            Domine a linguagem SQL para gerenciar e consultar bancos de dados.
            Aprenda a armazenar, organizar e recuperar informações com maestria.
          </p>
        </div>
      );
    case "Excel":
      return (
        <div className="pb-6 space-y-4 items-center">
          <a href={Excel} target='_blank' className="flex w-[95%] justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3" onClick={handleClick} >
            <Library />
            <span>Material complementar</span>
            <ChevronRight />
          </a>
          <p>
            Transforme-se em um mestre de planilhas com o Excel. Aprenda a
            organizar, analisar e visualizar dados de forma eficiente,
            otimizando seu tempo e trabalho.
          </p>
        </div>
      );
    case "Blender":
      return (
        <div className="pb-6 space-y-4 items-center">
                    <button className="flex w-[95%] justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3" onClick={handleClick} >
            <Library />
            <span>Material complementar</span>
            <ChevronRight />
          </button>
          <p>
            Dê vida à sua imaginação com o Blender, um software de modelagem 3D
            gratuito e poderoso. Aprenda os fundamentos da criação de modelos
            3D, animações e efeitos visuais.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default function Apresentacao() {
  return (
    <div className="flex flex-col space-y-8">
      {lista.map((info, index) => (
        <div key={index} className="flex">
          <ApresentacaoWorkshop
            imagem={info.img}
            titulo={info.titulo}
            descricao={info.descricao}
            sala={info.sala}
            dia={info.dia}
            horario={info.horario}
            material={info.material}
          />
        </div>
      ))}
    </div>
  );
}

const handleClick = () => {
  toast.info("Disponível em breve :)", {
    position: "bottom-center",
    duration: 2000,
  })
}

function ApresentacaoWorkshop({ imagem, titulo, descricao, sala, dia, horario, material }) {
  const shadowStyle = { boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.40)" };

  return (
    <Dialog.Root>
      <div
        className="flex flex-col lg:flex-row rounded-xl bg-zinc-800 overflow-hidden"
        style={shadowStyle}
      >
        <div className="hidden lg:block lg:w-1/3 h-64 relative bg-purple-500/[0.3] rounded-full">
          <Image
            alt="Album cover"
            src={imagem}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col p-6 w-full lg:w-2/3">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0 space-y-4">
              <h3 className="font-semibold text-white text-xl">{titulo}</h3>
              <div className="flex-col gap-2">
                <p className="text-small text-foreground/80 text-white">
                  Sala:{" "}
                  <span className="text-purple-500 font-bold">{sala}</span>
                </p>
                <p className="text-small text-foreground/80 text-white">
                  Dia: <span className="text-purple-500 font-bold">{dia} </span>
                  às{" "}
                  <span className="text-purple-500 font-bold">{horario}</span>
                </p>
              </div>

              <p className="text-large font-medium mt-2 text-white">
                {descricao}
              </p>
            </div>
          </div>

          <div className="flex mt-4 md:mt-auto flex-col">
            <div className="flex justify-between pt-4">
              <Dialog.Trigger className="text-small text-white">
                <span>Mais Informações</span>
              </Dialog.Trigger>
              <div className="flex gap-2 items-center text-small text-white">
                <SymplaButton />
              </div>

              <Dialog.Portal>
                <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
                  <Dialog.Content className="fixed z-50 inset-0 md:inset-auto max-md:top-[45%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[65vh] backdrop-blur-md bg-zinc-900/45 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Dialog.Close className="bg-zinc-900/60 p-1 rounded-full text-white ring-1 ring-zinc-900 absolute top-2 right-2">
                        <X className="size-5" />
                      </Dialog.Close>
                      <div className="flex flex-col items-center gap-3 lg:px-4 pt-2">
                        <div className="rounded-lg mt-8 lg:mt-8 justify-center inline-block w-3/4 lg:w-3/5 relative text-white 4 overflow-y-auto max-h-[50vh] md:max-h-[55vh]">
                          <div className="flex justify-center mb-4">
                            <span className="font-semibold text-lg">
                              {titulo}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <DetalhesWorkshop titulo={titulo} material={material}/>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.DialogOverlay>
              </Dialog.Portal>
            </div>
          </div>
        </div>
      </div>
    </Dialog.Root>
  );
}
