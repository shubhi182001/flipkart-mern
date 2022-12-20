import { InputBase, Box, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    font-size: unset;
`

const Search = () => {
  return (
    
        <SearchContainer style={{display:"flex"}}>
            <InputSearchBase placeholder='Search for products, brands and more'/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
  )
}

export default Search