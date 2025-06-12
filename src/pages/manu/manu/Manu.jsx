
import Cover from '../../shared/Cover'
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useManu from '../../../hooks/useManu'
import SectionTitle from '../../../compoment/SectionTitle'
import MenuCategory from './MenuCategory'

export default function Manu() {
    const [manu] = useManu()
    const dessert = manu.filter(item => item.category === 'dessert')
    const soup = manu.filter(item => item.category === 'soup')
    const salad = manu.filter(item => item.category === 'salad')
    const pizza = manu.filter(item => item.category === 'pizza')
    const offered = manu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover coverImg={coverImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subtitle="---Don't miss---" title="TODAY'S OFFER"></SectionTitle>
            {/* offerd menu item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory coverImg={dessertImg} items={dessert} title={'DESSERTS'}></MenuCategory>
            <MenuCategory coverImg={pizzaImg} items={pizza} title={'PIZZA'}></MenuCategory>
            <MenuCategory coverImg={saladImg} items={salad} title={'salad'}></MenuCategory>
            <MenuCategory coverImg={soupImg} items={soup} title={'DESSERTS'}></MenuCategory>
        </div>
    )
}
