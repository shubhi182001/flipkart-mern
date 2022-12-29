import { Box, Grid } from '@mui/material'
import React from 'react'

const MidSection = () => {
    const imageURL = [
        'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
        'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
    ];
  return (
    <Grid style={{marginTop:"20px"}} lg={12} sm={12} md={12} xs={12} container >
        {
           imageURL.map(i => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={i} alt="image" width="100%"/>
            </Grid>
           ))  
        }
    </Grid>
  )
}

export default MidSection