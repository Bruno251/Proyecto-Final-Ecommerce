import React, { useContext } from 'react'
import Hero from '../../components/Hero/Hero'
import ProductList from '../../components/ProductList/ProductList'
import { ShopContext } from '../../components/ShopContext/ShopContext'

const Homepage = () => {
  const {heroVisible} = useContext(ShopContext)
  return (
    <div>
      {heroVisible && <Hero />}
      <ProductList/>
    </div>
  )
}

export default Homepage