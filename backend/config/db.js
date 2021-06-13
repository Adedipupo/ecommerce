import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`Connected to MongoDB Successfully` .cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;