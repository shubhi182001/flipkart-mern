
import * as actionType from "../constants/cartConstants"


export const cartReducer = (state = {cartItems:[]}, action) => {
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exsist = state.cartItems.find(product=> product.id=== item.id);
            if(exsist){
                return {
                    ...state, cartItems: state.cartItems.map(data => data.product === exsist.product? item:  data)
                }
            }else{
                return { ...state, cartItems:[...state.cartItems, item]}
            }
        case actionType.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
        default:
            return state;
    }
}