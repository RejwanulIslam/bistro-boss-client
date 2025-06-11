import SectionTitle from '../../compoment/SectionTitle'
import MenuItems from '../shared/MenuItems'
import useManu from '../../hooks/useManu'

export default function PopularManu() {

    const [manu] = useManu()
    console.log(manu)
    const popularItem = manu.filter(data => data.category == 'popular')

    return (
        <div>
            <SectionTitle subtitle='---Check it out---' title='FROM OUR MENU'></SectionTitle>
            <div className='grid md:grid-cols-2 m-5'>
                {
                    popularItem.map(item => <MenuItems item={item}></MenuItems>)
                }
            </div>
        </div>
    )
}
