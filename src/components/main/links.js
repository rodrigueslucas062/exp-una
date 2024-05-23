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
        className="flex justify-between p-3 rounded-lg w-full md:w-1/3 bg-white text-zinc-900 font-semibold">
        <div>LOGO</div>
        <span>Apresentações</span>
        <div>
          <Ellipsis />
        </div>
      </Link>

      <Link
        href={""}
        className="flex justify-between p-3 rounded-lg w-full md:w-1/3 bg-white text-zinc-900 font-semibold">
        <div>LOGO</div>
        <span>Workshops</span>
        <div>
          <Ellipsis />
        </div>
      </Link>

      <Link
        href={""}
        className="flex justify-between p-3 rounded-lg w-full md:w-1/3 bg-white text-zinc-900 font-semibold">
        <div>LOGO</div>
        <span>Plestras</span>
        <div>
          <Ellipsis />
        </div>
      </Link>
    </>
  );
}
