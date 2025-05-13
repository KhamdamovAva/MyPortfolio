import React from 'react';
import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0  w-full z-50 bg-black border-b border-neutral-800 py-6 flex-col gap-4 md:flex-row md:px-6">
      <div className='flex-col items-start  max-w-[1490px] m-auto px-[30px] sm:flex sm:flex-row sm:justify-between sm:items-center'>
        <div className="flex items-center gap-6 text-2xl justify-center mb-[30px] sm:mb-0 sm:justify-start">
          <a href="https://www.linkedin.com/in/mirzoavaz-xamdamov-a6312b2b4/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/KhamdamovAva" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a href="https://t.me/Av4Ront1" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="hover:text-sky-500 transition" />
          </a>
        </div>

        <div className="flex gap-4 justify-center sm:justify-start">
          <button
            onClick={() => changeLanguage('en')}
            className="px-3 py-1 border border-neutral-700 rounded hover:bg-neutral-800 transition text-sm">EN
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className="px-3 py-1 border border-neutral-700 rounded hover:bg-neutral-800 transition text-sm">RU
          </button>
          <button
            onClick={() => changeLanguage('uz')}
            className="px-3 py-1 border border-neutral-700 rounded hover:bg-neutral-800 transition text-sm">UZ
          </button>
        </div>
      </div>



    </nav>

  );
}

export default Navbar;
