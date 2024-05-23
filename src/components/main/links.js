import { Ellipsis } from "lucide-react";
import Link from "next/link";

const Links = [
  {
    link: "/apresentacao",
    titulo: "Apresentação",
    icone: "Apresentação",
  },
  {
    link: "/workshops",
    titulo: "Workshops",
    icone: "Workshops",
  },
  {
    link: "/palestras",
    titulo: "Palestras",
    icone: "Palestras",
  },
];

export default function Paginas() {
  return (
    <>
      <Link
        href={""}
        className="flex justify-between items-center cursor-pointer p-3 rounded-lg w-full md:w-1/3 backdrop-blur-sm bg-zinc-100/[0.03] text-white text-lg font-semibold ring-1 ring-white">
        <div>LOGO</div>
        <span>Apresentações</span>
        <div className="bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900">
          <Ellipsis />
        </div>
      </Link>

      <Link
        href={""}
        className="flex justify-between cursor-pointer p-3 rounded-lg w-full md:w-1/3 backdrop-blur-sm bg-white/75 text-zinc-900 font-semibold">
        <div>LOGO</div>
        <span>Workshops</span>
        <div>
          <Ellipsis />
        </div>
      </Link>

      <Link
        href={""}
        className="flex justify-between cursor-pointer p-3 rounded-lg w-full md:w-1/3 backdrop-blur-sm bg-white/75 text-zinc-900 font-semibold">
        <div>LOGO</div>
        <span>Plestras</span>
        <div>
          <Ellipsis />
        </div>
      </Link>
    </>
  );
}
