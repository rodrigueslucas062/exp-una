import Image from "next/image";
import Link from "next/link";
import Sympla from "../../../public/images/SymplaIcon.jpeg";

export default function SymplaButton() {
  return (
    <>
      <Link href={""} className="flex items-center gap-2 py-2 px-3 backdrop-blur-sm bg-zinc-100/[0.03] rounded-md" >
        <Image src={Sympla} className="rounded-full size-6" />
        <span className="text-sm font-semibold text-white">Sympla</span>
      </Link>
    </>
  );
}
