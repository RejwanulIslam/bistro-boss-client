import React, { useState } from 'react'
import orderImg from '../../../assets/home/orderImg.jpg'
import Cover from '../../shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useManu from '../../../hooks/useManu';
import FoodCard from '../../../compoment/FoodCard';
import { useParams } from 'react-router-dom';
export default function Order() {
    const [tabIndex, settabIndex] = useState(0)
    const { category } = useParams()
    console.log(category)
    const [manu] = useManu()
    const dessert = manu.filter(item => item.category === 'dessert')
    const soup = manu.filter(item => item.category === 'soup')
    const salad = manu.filter(item => item.category === 'salad')
    const pizza = manu.filter(item => item.category === 'pizza')
    const offered = manu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover coverImg={orderImg} title="order food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCard item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            pizza.map(item => <FoodCard item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            soup.map(item => <FoodCard item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            dessert.map(item => <FoodCard item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            offered.map(item => <FoodCard item={item}> </FoodCard>)
                        }
                    </div> 
                </TabPanel>
            </Tabs>
        </div>
    )
}
