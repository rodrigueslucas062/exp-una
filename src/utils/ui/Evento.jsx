// Teste
import Image from "next/image";
import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { GraduationCap, MoveRight } from "lucide-react";
import Logo from "../../../public/images/Logo.jpeg";

function AnimatedTooltip({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold text-white relative z-30 text-base">
                {item.name}
              </div>
              <div className="text-white text-xs">{item.designation}</div>
            </motion.div>
          )}
          <Image
            onMouseMove={handleMouseMove}
            height={30}
            width={30}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-8 w-8 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
}

const ApresentacoesInfo = [
  {
    titulo: "Track Cash",
    descricao:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure soluta esse reprehenderit quae magni, perferendis, nobis voluptas eos saepe a,et voluptatibus quo non illo labore ducimus quis? Ducimus, non!",
    integrantes: [
      {
        id: 1,
        name: "Elias Silva",
        designation: "Desenvolvedor",
        image: { Logo },
      },
      {
        id: 2,
        name: "Matheus Lacerda",
        designation: "Desenvolvedor",
        image: { Logo },
      },
    ],
  },
];

function ApresentacaoDados() {
  return (
    <>
      {ApresentacoesInfo.map((info, index) => (
        <div key={index}>
          <ApresentacoesEngSoftware
            titulo={info.titulo}
            descricao={info.descricao}
            integrantes={info.integrantes}
          />
        </div>
      ))}
    </>
  );
}

export function ApresentacoesEngSoftware({
  titulo,
  descricao,
  integrantes = [],
}) {
  return (
    <article className="p-6 backdrop-blur-sm bg-zinc-100/[0.03] rounded-lg ring-1 ring-gray-700 shadow-md">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="gap-2 text-xs font-medium inline-flex items-center px-2 py-1 rounded bg-purple-500/20 text-white">
          <GraduationCap size={14} />
          Eng. Software
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {titulo}
      </h2>
      <p className="mb-5 font-light text-gray-400">{descricao}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-medium text-white">Participantes</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-white text-primary-600 text-primary-500 hover:underline"
        >
          Ver mais
          <MoveRight />
        </a>
      </div>
      <AnimatedTooltip
        items={integrantes.map((integrante, index) => ({
          id: index,
          name: integrante.name,
          designation: integrante.designation,
          image: integrante.image,
        }))}
      />
    </article>
  );
}

export default ApresentacaoDados;
