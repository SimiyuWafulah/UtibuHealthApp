import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()

const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the database')
}).catch((err) => {
    console.error('Error connecting to the database:', err)
})

app.listen(PORT, () => {
    console.log('Server is running')
});



