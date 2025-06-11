import React from 'react'
import Banar from './Banar'
import Category from './Category'
import PopularManu from './PopularManu'
import Fetured from './Fetured'
import Testimonis from './Testimonis'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss|Home</title>
      </Helmet>
      <Banar></Banar>
      <Category></Category>
      <PopularManu></PopularManu>
      <Fetured></Fetured>
      <Testimonis></Testimonis>
    </div>
  )
}
