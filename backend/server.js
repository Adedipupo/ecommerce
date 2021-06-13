import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()
connectDB();
const app = express()

app.use(express.json())
const port = process.env.PORT || 5000


app.get('/api/products', (req, res) => {
    res.json({data: products})
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json({data: product})
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`.yellow.bold);
})