import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function ProgCompleta() {
  return (
    <>
      <Link href={"/programacao"} className="flex items-center gap-2 py-2 px-3 backdrop-blur-sm bg-zinc-100/[0.03] rounded-md" >
        <div className="bg-gray-100/10 p-2 rounded-full text-white ring-1 ring-zinc-900">
          <CalendarDays size={14} />
        </div>
        <span className="text-sm font-semibold text-white">
          Programação Completa
        </span>
      </Link>
    </>
  );
}
