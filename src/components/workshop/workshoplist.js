import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Logo from "../../../public/images/Logo.jpeg";

const lista = [
  {
    img: Logo,
    titulo: "Excel",
    descricao: "texto",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "HTML e CSS",
    descricao: "texto",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "SQL",
    descricao: "texto",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "Blender",
    descricao: "texto",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "Git",
    descricao: "texto",
    sala: "teste",
  },
];

export default function Apresentacao() {
  return (
    <>
      {lista.map((info, index) => (
        <div key={index}>
          <ApresentacaoWorkshop
            imagem={info.img}
            titulo={info.titulo}
            descricao={info.descricao}
            sala={info.sala}
          />
        </div>
      ))}
    </>
  );
}

function ApresentacaoWorkshop({ imagem, titulo, descricao, sala }) {
  return (
    <div class="relative bg-zinc-100[0.03] space-y-16 backdrop-blur-sm ring-1 ring-white flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
      <div class="h-auto overflow-hidden justify-center">
        <Image src={imagem} alt="Imagem da tecnologia" width={160} height={160} />
      </div>
      <div class="flex flex-col bg-white py-4 px-3">
        <span>{titulo}</span>
        <span>{descricao}</span>
        <span>{sala}</span>
        <div class="flex justify-between items-center">
          <p class="text-xs text-gray-400">{sala}</p>
          <Dialog.Trigger class="relative z-40 flex items-center gap-2">
            <span>Saiba mais</span>
          </Dialog.Trigger>
        </div>
      </div>
    </div>
  );
}
