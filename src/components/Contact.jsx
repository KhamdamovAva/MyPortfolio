import React from 'react'
import { CONTACT } from '../data/data'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h3 className='my-10 text-center text-4xl'>Get in Touch</h3>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <a className='my-4 block' href={`tel:${CONTACT.phoneNo}`}>{CONTACT.phoneNo}</a>
        <a className='border-b' href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
