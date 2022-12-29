import { Box, styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import Banner from './Banner'
import Navbar from './Navbar'
import {useDispatch, useSelector} from 'react-redux';
import Slide from './Slide'

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
          <Slide products={products}/>
    
        </Component>
    
    </>
   
  )
}

export default Home