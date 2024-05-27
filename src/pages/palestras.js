import Speaker from '../../public/images/julio.png'
import Image from "next/image";
import { Highlight } from "@/components/text-highlight/text-highlight.component";

export default function Palestras() {
    return (
        <div className="flex items-center justify-center w-full h-screen text-white flex-col break-words gap-5">
            <div className="flex items-center flex-col gap-2 text-2xl animate-fade-up w-full">
                <div className='flex flex-row gap-2'>
                    <h2>Palestrante</h2>
                    <Highlight><p className='font-bold'>Julio</p></Highlight>
                </div>
                <p className='text-lg text-end'>Inteligência Artificial</p>
            </div>


            {/* speaker's logo */}
            <div className="relative flex items-center justify-center animate-fade-up">
                <div className="bg-purple-500/[0.3] duration-300 grayscale-[40%] rounded-full w-52 h-52" />
                <Image src={Speaker} alt="palestrante" className="grayscale-[50%] rounded-full absolute" height={0} width={0} />
            </div>
        </div>
    )
}