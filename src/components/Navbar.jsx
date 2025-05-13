import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegramPlane } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className='mb-5 flex items-center justify-between py-6'>
      <div className='my-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/mirzoavaz-xamdamov-a6312b2b4/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/KhamdamovAva">
          <FaGithub />
        </a>
        <a href="https://t.me/Av4Ront1">
          <FaTelegramPlane />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
