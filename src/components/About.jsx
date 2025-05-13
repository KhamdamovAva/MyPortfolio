import aboutImg from "../assets/myPhoto2.jpg";
import { ABOUT_TEXT } from "../data/data";

function About() {
  return (
    <section className="border-b border-neutral-900 pb-12">
      <h2 className="my-16 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About Me"
            className="rounded-2xl w-[300px] sm:w-[350px] lg:w-[390px] h-[450px] object-cover shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <p className="max-w-xl text-lg leading-relaxed text-center lg:text-left">
            {ABOUT_TEXT}
          </p>
        </div>


      </div>
    </section>
  );
}

export default About;
