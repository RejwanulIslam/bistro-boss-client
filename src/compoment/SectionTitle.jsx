import React from 'react'

export default function SectionTitle({subtitle,title}) {
  return (
    <div className='mx-auto text-center md:w-4/12 my-8'>
        <p className='text-yellow-600'>{subtitle}</p>
        <h3 className='text-4xl uppercase border-y-4 py-4'>{title}</h3>
    </div>
  )
}
