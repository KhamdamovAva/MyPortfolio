import { useTranslation } from 'react-i18next';
import aboutImg from "../assets/myPhoto3.jpg";
import { motion } from "framer-motion";

function About() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-neutral-900 pb-12">
      <h2 className="my-16 text-center text-4xl font-light">
        {t('aboutMe.content')}
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About Me"
            className="rounded-2xl w-[300px] sm:w-[350px] lg:w-[390px] h-[450px] object-cover shadow-lg"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-4">
          <p className="max-w-xl text-lg leading-relaxed text-center lg:text-left">
            {t('about.content')}
          </p>
        </motion.div>


      </div>
    </section>
  );
}

export default About;
