import { Box } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const FirstSlide = ({products, title , deal}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <>
        <Box style={{display:"flex"}}>
            <Box style={{width:"85%"}}>
                <Slide products={products} title={title} deal={deal}/>
            </Box>
            <Box style={{backgroundColor:"white", padding:"5px", marginTop:"10px", marginLeft:"10px", width:"17%", textAlign:"center" }}>
                <img src={adURL} alt="no ad" width="217px"/>
            </Box>
        </Box>
    </>
  )
}

export default FirstSlide