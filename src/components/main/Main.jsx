import { Ellipsis } from "lucide-react";
import Link from "next/link";
import Links from "./links";

export function Main() {
  return (
    <section id="home" className="min-h-screen">
      <div className="flex flex-col items-center pb-20">
        <span className="text-3xl mb-4 ">Expo una</span>
        <span>texto de teste</span>
      </div>
      <div className="flex flex-col justify-center">
        <Links />
      </div>
    </section>
  );
}
