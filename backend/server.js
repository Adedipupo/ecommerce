import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoute from './routes/productRoutes.js'
import userRoute from './routes/userRoutes.js'
import orderRoute from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB();
const app = express()

app.use(express.json())
const port = process.env.PORT || 5000

app.use('/api', productRoute)
app.use('/api/user', userRoute)
app.use('/api/orders', orderRoute)

app.get('/api/config/paypal', (req, res) => 
    res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on ${port}`.yellow.bold);
})