import React from 'react'
import MenuItems from '../../shared/MenuItems'
import Cover from '../../shared/Cover'

export default function MenuCategory({ items, title, coverImg }) {
  return (
    <div>
      {title && <Cover coverImg={coverImg} title={title}></Cover>}

      <div className='grid md:grid-cols-2 m-5'>
        {
          items.map(item => <MenuItems item={item}></MenuItems>)
        }
      </div>

    </div>
  )
}
