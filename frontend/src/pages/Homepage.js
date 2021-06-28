import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Products/Products'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const Homepage = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
    
    const productList = useSelector(state => state.productList)
    const { loading,error,products} = productList

    useEffect(() => {
        dispatch(listProducts(keyword,pageNumber))
    },[dispatch,keyword,pageNumber])

    return (
        <>
            <h1>Latests Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>:
            <Row>
                {products.map((product)=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>} 
        </>
    )
}

export default Homepage
