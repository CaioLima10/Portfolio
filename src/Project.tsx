import { FiArrowUpRight } from "react-icons/fi";
import GifProjectOne from "./video/project01.gif";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";

export default function Project() {
  return (
    <div className="flex flex-col w-full items-start justify-start">
      <div
        id="card-one"
        className=" sm:min-w-44 sm:min-h-96 mb-4 sm:mb-44 border border-zinc-100 bg-space flex items-center p-4 relative"
      >
        <div className="text-5xl text-space mr-4">
          <span className="border-2 border-space rounded-full w-24 h-24 flex items-center justify-center relative">
            <span className="text-4xl text-space relative z-10">01</span>
          </span>
        </div>
        <div>
          <h1 className="text-3xl mb-2 sm:mb-10 font-bold text-white">
            SIGMA BANK - app banco
          </h1>
          <img
            className="mb-2 sm:mb-10 w-full sm:w-72 h-36 border border-zinc-500"
            src={GifProjectOne}
            alt=""
          />
          <h2 className="text-xl">Ferramentas</h2>
          <div className="flex gap-2 sm:gap-4 text-3xl mb-2 sm:mb-5">
            <IoLogoJavascript />
            <IoLogoHtml5 />
            <IoLogoReact />
            <IoLogoCss3 />
            <SiStyledcomponents />
          </div>
          <p className="text-sm w-full sm:w-72 text-white">
            Projeto de banco que permite aos usuários criar seu próprio cartão,
            passando por verificações de validação. O número do cartão é gerado
            automaticamente. Os usuários podem deletar ou bloquear o cartão,
            enviar Pix, depositar dinheiro na conta Poupa Herói e, como
            resultado, ganhar prêmios.
          </p>
          <div>
          </div>
          <button
            className="flex items-center justify-between w-full gap-2 bg-space text-white px-4 py-2 border border-white rounded-md mt-2 sm:mt-4 hover:bg-space-dark transition duration-300"
          >
            Código do Projeto
            <FiArrowUpRight />
          </button>
          <button
            className="flex items-center justify-between w-full gap-2 bg-space text-white px-4 py-2 border border-white rounded-md mt-2 sm:mt-4 hover:bg-space-dark transition duration-300"
          >
            Ver vídeo completo do projeto
            <FiArrowUpRight />
          </button>
        </div>
      </div>

      {/* Outros cards aqui */}
    </div>
  );
}
