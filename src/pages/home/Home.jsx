import React from 'react'
import Banar from './Banar'
import Category from './Category'
import PopularManu from './PopularManu'
import Fetured from './Fetured'
import Testimonis from './Testimonis'

export default function Home() {
  return (
    <div>
      
      <Banar></Banar>
      <Category></Category>
      <PopularManu></PopularManu>
      <Fetured></Fetured>
      <Testimonis></Testimonis>
    </div>
  )
}
