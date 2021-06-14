import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cardConstant'


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`)
    
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.data._id,
            name: data.data.name,
            image: data.data.image,
            price: data.data.price,
            countInStock: data.data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems ))
}