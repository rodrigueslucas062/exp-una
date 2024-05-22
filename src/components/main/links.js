import { Ellipsis } from "lucide-react";

export default function divs() {
  return (
    <div className="space-y-4">
      <div
        href={""}
        className="flex justify-between p-3 rounded-lg w-full bg-white text-zinc-900 font-semibold"
      >
        <div>LOGO</div>
        <span>Apresentações</span>
        <div>
          <Ellipsis />
        </div>
      </div>

      <div
        href={""}
        className="flex justify-between p-3 rounded-lg w-full bg-white text-zinc-900 font-semibold"
      >
        <div>LOGO</div>
        <span>Workshops</span>
        <div>
          <Ellipsis />
        </div>
      </div>

      <div
        href={""}
        className="flex justify-between p-3 rounded-lg w-full bg-white text-zinc-900 font-semibold"
      >
        <div>LOGO</div>
        <span>Plestras</span>
        <div>
          <Ellipsis />
        </div>
      </div>
    </div>
  );
}
