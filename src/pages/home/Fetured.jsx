import React from 'react'
import SectionTitle from '../../compoment/SectionTitle'
import feturesImg from '../../assets/home/featured.jpg'
import './Ferured.css'

export default function Fetured() {
  return (
    <div className='fetured-item bg-fixed text-white'>

        <SectionTitle  subtitle='---Check it out---' title='FROM OUR MENU'></SectionTitle>
    <div className='md:flex gap-4 justify-center py-20 px-36 items-center bg-slate-500 bg-opacity-60'>
        <div>
            <img src={feturesImg}></img>
        </div>
        <div>
            <p className='text-white'>March 20, 2025</p>
            
            <h2 className='uppercase text-2xl text-white'>WHERE CAN I GET SOME?</h2>
              <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta provident 
                reprehenderit quasi libero placeat voluptates explicabo ipsum, molestiae dolores,
                 necessitatibus sapiente laboriosam! Voluptatibus
                 ducimus placeat pariatur! Incidunt cum quas omnis!</p>
          <button className='btn btn-outline border-0 border-b-4 block text-white'>Order Now</button>
          </div>
    </div>
    
    </div>
  )
}
