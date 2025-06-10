import React from 'react'

export default function MenuItems({ item }) {

    const { _id, name, recipe, image, category, price } = item
    return (
        <div className='flex m-5'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={image}></img>
            <div className='text-left'>
                <h3 className='uppercase'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    )
}
