import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import { errorHandling } from './middlewares/errorHandling.middleware.js';
dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the database')
}).catch((err) => {
    console.error('Error connecting to the database:', err)
})

app.listen(PORT, () => {
    console.log('Server is running')
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute)

app.use(errorHandling)

