import React from 'react'
import MenuItems from '../../shared/MenuItems'
import Cover from '../../shared/Cover'
import { Link } from 'react-router-dom'

export default function MenuCategory({ items, title, coverImg }) {
  return (
    <div>
      {title && <Cover coverImg={coverImg} title={title}></Cover>}

      <div className='grid md:grid-cols-2 m-5'>
        {
          items.map(item => <MenuItems item={item}></MenuItems>)
        }
      </div>
<Link to={`/order/${title}`}>
      <button className='btn btn-outline border-0 border-b-4 block '>Order Now</button>
</Link>
    </div>
  )
}
