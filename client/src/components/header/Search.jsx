import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import React, {useState, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';

import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/productActions"
import {Link} from "react-router-dom"
 
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

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px;

`


const Search = () => {
    const[text, setText] = useState("");
    const dispatch = useDispatch();
    const{products} = useSelector(state => state.getProducts);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])



  return (
    
        <SearchContainer style={{display:"flex"}}>
            <InputSearchBase placeholder='Search for products, brands and more' name='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                text && 
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(
                                product => (
                                    <ListItem>
                                        <Link to={`product/${product.id}`} onClick={() => setText('')}
                                        style={{textDecoration:"none", color:"inherit"}}>
                                            {product.title.longTitle}
                                        </Link>
                                    </ListItem>
                                )
                            )
                        }

                    </ListWrapper>
            }
        </SearchContainer>
  )
}

export default Search