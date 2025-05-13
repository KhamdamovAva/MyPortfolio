import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVitess } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Technologies() {
  return (
    <section className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className="text-7xl text-yellow-400" />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className="text-7xl" />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiVitess className="text-7xl text-violet-600" />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaFigma className="text-7xl " />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaSass className="text-7xl text-pink-600" />
        </div>
      </div>
    </section>
  )
}

export default Technologies
