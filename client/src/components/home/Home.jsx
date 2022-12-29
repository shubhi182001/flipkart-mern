import { Box, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import Banner from './Banner'
import Navbar from './Navbar'
import {useDispatch, useSelector} from 'react-redux';
import Slide from './Slide'
import FirstSlide from './FirstSlide'

const Component = styled(Box)`
  padding: 10px;
  background: #F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)
  console.log(products); 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])

  return (
    <>
        <Navbar/>
        <Component>
          <Banner/>
          <FirstSlide products={products} title="Best of Electronics" deal={true}/>
          <Slide products={products} title="Beauty, Food, Toys & more" deal={false}/>
          <Slide products={products} title="Winter Essentials" deal={false}/>
          <Slide products={products} title="Wedding & Gifting Specials" deal={true}/>
          <Slide products={products} title="Sports, Healthcare & more" deal={false}/>
          <Slide products={products} title="New Year Specials" deal={true}/>
          <Slide products={products} title="Home & Kitchen Essentials" deal={false}/>
          <Slide products={products} title="Grooming, Books, Auto & more" deal={true}/>
          <Slide products={products} title="Top Deals" deal={true}/>
          <Slide products={products} title="Books, Toys & More" deal={false}/>
          <Slide products={products} title="Pick Your Styles" deal={false}/>
    
        </Component>
    
    </>
   
  )
}

export default Home