import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PROJECT_IMAGES } from '../projectsImages';

function Projects() {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  return (
    <section className='border-b border-neutral-900 pb-4'>
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        {t('proj.title')}
      </motion.h3>

      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className='mb-6 rounded w-[240px] h-[140px] object-cover cursor-pointer'
                  src={PROJECT_IMAGES[index]}
                  alt={project.title}
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
