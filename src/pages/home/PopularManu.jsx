import React, { useEffect, useState } from 'react'
import SectionTitle from '../../compoment/SectionTitle'
import MenuItems from '../shared/MenuItems'

export default function PopularManu() {
    const [manu, setmanu] = useState([])
    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                const populatItem = data.filter(data => data.category == 'popular')
                setmanu(populatItem)

            })
    }, [])
    console.log(manu)
    return (
        <div>
            <SectionTitle subtitle='---Check it out---' title='FROM OUR MENU'></SectionTitle>
           <div className='grid md:grid-cols-2 m-5'>
            {
                manu.map(item => <MenuItems item={item}></MenuItems>)
            }
            </div>
        </div>
    )
}
