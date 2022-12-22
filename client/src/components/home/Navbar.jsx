import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'


const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
`
const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`


const Navbar = () => {
  return (
    <Component>
        {
            navData.map((e) => (
                <Container>
                    <img src={e.url} alt="nav" style={{width: 64}}/>
                    <Text>{e.text}</Text>
                </Container>
            ))
        }
    </Component>
  )
}

export default Navbar