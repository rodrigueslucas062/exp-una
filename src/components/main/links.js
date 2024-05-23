import * as Dialog from "@radix-ui/react-dialog";
import { ChevronRight, FlaskConical, MoreHorizontal, Share2, X,
} from "lucide-react";
import { toast } from "sonner";

const Links = [
  {
    link: "/apresentacoes",
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

const Paginas = ({ link, titulo, icone }) => {
  const shadowStyle = { boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.20)", };

  const handleLinkClick = (e) => {
    if (!e.defaultPrevented) {
      window.open(link);
    }
  };

  const handleCopyLink = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link);
    toast.success("Link copiado", {
      position: "bottom-center",
      duration: 2000,
    });
  };

  return (
    <Dialog.Root Titulo={titulo}>
      <div className="flex justify-between items-center cursor-pointer p-3 rounded-lg w-full md:w-1/3 backdrop-blur-sm bg-zinc-100/[0.03] text-white text-lg font-semibold ring-1 ring-white"
        style={shadowStyle}
        onClick={handleLinkClick} >
        <div>{icone}</div>
        <span>{titulo}</span>
        <Dialog.Trigger
          className="bg-gray-100/10 p-1 rounded-full text-white ring-1 ring-zinc-900"
          onClick={(e) => e.stopPropagation()} >
          <MoreHorizontal />
        </Dialog.Trigger>
      </div>

      <Dialog.Portal Titulo={titulo}>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/20">
          <Dialog.Content className="fixed z-50 inset-0 md:inset-auto max-md:top-[45%] lg:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[65vh] backdrop-blur-md bg-zinc-900/45 max-md:rounded-t-3xl lg:rounded-3xl flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="bg-zinc-900/60 p-1 rounded-full text-white ring-1 ring-zinc-900 absolute top-2 right-2">
              <X className="size-5" />
            </Dialog.Close>
            <div className="flex flex-col items-center gap-3 px-2 lg:px-4 pt-2">
              <div className="rounded-lg mt-8 lg:mt-8 justify-center inline-block w-3/4 lg:w-3/5 relative text-white">
                <div className="flex justify-center mb-8">
                  <span className="font-semibold text-lg">{titulo}</span>
                </div>
                <div className="flex flex-col bg-gray-100/10 space-y-4 lg:space-y-1.5 font-semibold">
                  <button className="flex justify-between px-3 rounded-md ring-1 ring-gray-300 py-2 lg:py-3"
                    onClick={handleCopyLink} >
                    <Share2 />
                    <span>Compartilhar link</span>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex text-white font-semibold mt-auto pb-2 w-3/4 lg:w-3/5 mx-auto flex-col space-y-2 bottom-0">
              <div className="flex justify-center">
                <span className="text-sm">Made for </span>
                <FlaskConical className="text-lime-500" />{" "}
                <span className="text-sm">By Lucas</span>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.DialogOverlay>
      </Dialog.Portal>

    </Dialog.Root>
  );
};

const LinksGrid = () => {
  return (
    <>
      {Links.map((info, index) => (
        <Paginas
          key={index}
          link={info.link}
          icone={info.icone}
          titulo={info.titulo}
        />
      ))}
    </>
  );
};

export default LinksGrid;
