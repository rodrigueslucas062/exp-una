import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { ChevronRight, Share2, X } from "lucide-react";
import Image from "next/image";
import * as Images from "../../utils/images.js";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const lista = [
  {
    img: Images.Excel,
    titulo: "Excel",
    descricao:
      "Transforme-se em um mestre de planilhas com o Excel. Aprenda a organizar, analisar e visualizar dados de forma eficiente, otimizando seu tempo e trabalho.",
    sala: "201",
    sympla: "",
  },
  {
    img: Images.Html,
    titulo: "HTML e CSS",
    descricao:
      "Use HTML e CSS para estruturar seus sites. Crie designs incríveis e personalizados com CSS, dando vida às suas páginas.",
    sala: "301",
    sympla: "",
  },
  {
    img: Images.Sql,
    titulo: "SQL",
    descricao:
      "Domine a linguagem SQL para gerenciar e consultar bancos de dados. Aprenda a armazenar, organizar e recuperar informações com maestria.",
    sala: "401",
    sympla: "",
  },
  {
    img: Images.Blender,
    titulo: "Blender",
    descricao:
      "Dê vida à sua imaginação com o Blender, um software de modelagem 3D gratuito e poderoso. Aprenda os fundamentos da criação de modelos 3D, animações e efeitos visuais.",
    sala: "501",
    sympla: "",
  },
  {
    img: Images.Git,
    titulo: "Git",
    descricao:
      "Torne-se um especialista em Git, a ferramenta essencial para controle de versão de software. Aprenda a trabalhar em equipe com eficiência, rastreando alterações e versionamento do seu código.",
    sala: "601",
    sympla: "",
  },
];

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
            sympla={info.sympla}
          />
        </div>
      ))}
    </div>
  );
}

function ApresentacaoWorkshop({ imagem, titulo, descricao, sala, sympla }) {
  const shadowStyle = { boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.40)" };

  return (
    <Dialog.Root>
      <div className="flex flex-col lg:flex-row rounded-xl bg-zinc-800 overflow-hidden"
        style={shadowStyle} >
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
              <p className="text-small text-foreground/80 text-white">
                Sala: <span className="text-purple-500 font-bold">{sala}</span>
              </p>
              <p className="text-large font-medium mt-2 text-white">{descricao}</p>
            </div>
          </div>

          <div className="flex mt-4 md:mt-auto flex-col">
            <div className="flex justify-between">
              <Dialog.Trigger className="text-small text-white">
                <span>Saiba mais</span>
              </Dialog.Trigger>
              <Link href={sympla} className="flex gap-2 items-center text-small text-white" >
                <span>Sympla</span>
                <ExternalLink size={16} />
              </Link>

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
                      <div className="flex flex-col items-center gap-3 px-2 lg:px-4 pt-2">
                        <div className="rounded-lg mt-8 lg:mt-8 justify-center inline-block w-3/4 lg:w-3/5 relative text-white">
                          <div className="flex justify-center mb-8">
                            <span className="font-semibold text-lg">
                              {titulo}
                            </span>
                          </div>
                          <div className="flex flex-col bg-gray-100/10 space-y-4 lg:space-y-1.5 font-semibold">
                            <button className="flex justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3">
                              <Share2 />
                              <span>Compartilhar link</span>
                              <ChevronRight />
                            </button>
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