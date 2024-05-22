import { Ellipsis } from "lucide-react";
import Link from "next/link";

export function Main() {
  return (
    <section id="home" className="flex flex-col space-y-4 place-items-center">
      <span className="text-3xl mb-4 ">Expo una</span>
      <div className="space-y-4 flex flex-col">
      <Link href={""} className="flex justify-between p-3 rounded-lg w-full bg-white text-zinc-900 font-semibold">
        <div>
            LOGO
        </div>
        <span>
            Apresentações
        </span>
        <div>
            <Ellipsis/>
        </div>
      </Link>

      <Link href={""} className="flex justify-between p-3 rounded-lg w-full bg-white text-zinc-900 font-semibold">
        <div>
            LOGO
        </div>
        <span>
            Workshops
        </span>
        <div>
            <Ellipsis/>
        </div>
      </Link>

      <Link href={""} className="flex justify-between p-3 rounded-lg w-full bg-white text-zinc-900 font-semibold">
        <div>
            LOGO
        </div>
        <span>
            Plestras
        </span>
        <div>
            <Ellipsis/>
        </div>
      </Link>
      </div>
      
      
    </section>
  );
}
