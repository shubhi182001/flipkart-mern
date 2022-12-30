import axios from "axios";
import * as actionTypes from "../constants/productConstants";


const URL = "http://localhost:8000";
export const getProducts = () => async(dispatch) => {
    try{
        const {data} = await axios.get(`${URL}/products`);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})  //dispatch call the reducer.
    }catch(e) {
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload:e.message})
    }
}

export const getProductDetails = () => async(dispatch) => {
    try{
        
    }catch(e){
        
    }
}