import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const RightComponent = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}))
const LeftComponent = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }
}))

const FirstSlide = ({products, title , deal}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <>
        <Box style={{display:"flex"}}>
            <LeftComponent style={{width:"85%"}}>
                <Slide products={products} title={title} deal={deal}/>
            </LeftComponent>
            <RightComponent style={{backgroundColor:"white", padding:"5px", marginTop:"10px", marginLeft:"10px", width:"17%", textAlign:"center" }}>
                <img src={adURL} alt="no ad" width="217px"/>
            </RightComponent>
        </Box>
    </>
  )
}

export default FirstSlide