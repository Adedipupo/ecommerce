import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { addToCart } from '../actions/cardActions'

const Cartpage = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
 
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart 

    console.log(cart);

    useEffect(() => {
        if (productId) {

            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])


    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
} 

export default Cartpage
