import React from 'react'
import { EXPERIENCES } from '../data/data'

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h3 className='my-20 text-center text-4xl'>Experience</h3>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className='mb-2 font-semibold'>{experience.course}</h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='inline-block mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
