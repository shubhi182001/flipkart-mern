import React from 'react'
import {AppBar, Toolbar, styled, Box, Typography} from '@mui/material'
import Search from '../search/Search'
import CustomButtons from '../customButtons/CustomButtons'


//How to use styled component in mui:
const StyledHeader = styled(AppBar)`
    background: #514CE8k;
    height: 55px;
`
const StyledBox = styled(Box)`
  	margin-left: 12%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic
`
const PlusImage = styled('img')({
  width: 10,
  height:10,
  marginLeft: 4
})
const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`



const Header = () => {

  const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subUrl =  'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div className='header'>
        <StyledHeader>
            <Toolbar style={{minHeight:"55px"}}>
              <StyledBox>
                <img src={logoUrl} alt="logo" style={{width:"75px"}} />
                <Box style={{display:"flex"}}>
                  <SubHeading>Explore&nbsp; 
                    <Box component="span" style={{color: '#FFE500'}}>
                      Plus
                    </Box>
                  </SubHeading>
                  <PlusImage src={subUrl} alt="error" />
                </Box>
              </StyledBox>
              <Search/>
              <CustomButtonWrapper>
                <CustomButtons/>
              </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    </div>
  )
}

export default Header