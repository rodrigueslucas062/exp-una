import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Logo from "../../../public/images/Logo.jpeg";
import { Meteors } from "@/utils/ui/meteoro";

const lista = [
  {
    img: Logo,
    titulo: "Excel",
    descricao: "Transforme-se em um mestre de planilhas com o Excel. Aprenda a organizar, analisar e visualizar dados de forma eficiente, otimizando seu tempo e trabalho.",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "HTML e CSS",
    descricao: "Use HTML e CSS para estruturar seus sites. Crie designs incríveis e personalizados com CSS, dando vida às suas páginas.",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "SQL",
    descricao: "Domine a linguagem SQL  para gerenciar e consultar bancos de dados. Aprenda a armazenar, organizar e recuperar informações com maestria.",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "Blender",
    descricao: "Dê vida à sua imaginação com o Blender, um software de modelagem 3D gratuito e poderoso. Aprenda os fundamentos da criação de modelos 3D, animações e efeitos visuais.",
    sala: "teste",
  },
  {
    img: Logo,
    titulo: "Git",
    descricao: "Torne-se um especialista em Git, a ferramenta essencial para controle de versão de software. Aprenda a trabalhar em equipe com eficiência, rastreando alterações e versionamento do seu código.",
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
    const shadowStyle = { boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.20)" };
    
  return (
    <div
    className="flex flex-1 space-x-4 rounded-xl bg-background/60 dark:bg-default-100/50 max-w-[610px] border border-white"style={shadowStyle}
    shadow="sm"
  >
    {/* <Meteors /> */}
   
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 items-center justify-center">
        <div className="flex col-span-6 h-full">
        
          <Image
            alt="Album cover"
            className="object-cover"
            height="auto"
            shadow="md"
            src={imagem}
            width="100%"
          />
        </div>

        <div className="flex flex-col col-span-6 md:col-span-8 p-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold text-foreground/90 text-white">{titulo}</h3>
              <p className="text-small text-foreground/80 text-white">{sala}</p>
              <h1 className="text-large font-medium mt-2 text-white">{descricao}</h1>
            </div>
            <button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            ></button>
          </div>

          <div className="flex flex-col mt-3 gap-1">
            <div className="flex justify-between">
            <Dialog.Trigger className="text-small text-white">
                <span>Saiba mais</span>
            </Dialog.Trigger>
                <div className="text-small text-white">
                <span>Sympla</span>
                </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}