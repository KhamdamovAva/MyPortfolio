import React from 'react'
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h3 className='my-10 text-center text-4xl'>{t('Contact.title')}</h3>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>Uzbekistan, Tashkent</p>
        <a className='my-4 block' href={`tel:+998946025206`}>+998 94 602 52 06</a>
        <a className='border-b' href={`mailto:ava.lifeone@gmail.com`}>ava.lifeone@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact
