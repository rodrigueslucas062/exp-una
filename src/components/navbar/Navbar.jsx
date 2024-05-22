import { Ellipsis } from "lucide-react";

export default function Navbar() {
    return(
        <div className="flex p-3 bg-white mt-5 w-2/3">
            <div>
                Imagem
            </div>
            <span>
                Expo Una
            </span>
            <Ellipsis />
        </div>
    )
}