import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import orderRoute from './routes/order.route.js'
import inventoryRoute from './routes/inventory.route.js'
import chronicDiseaseApiRoute from './chronicDiseasesApi.js'
import medicationRoute from './routes/route.medication.js'
import mpesaRoute from './routes/payment.route.js'
import { errorHandling } from './middlewares/errorHandling.middleware.js';
dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the database')
}).catch((err) => {
    console.error('Error connecting to the database:', err)
})

app.listen(PORT, () => {
    console.log('Server is running')
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/order',orderRoute);
app.use('api/inventory',inventoryRoute);
app.use('/api', chronicDiseaseApiRoute);
app.use('/api/payment', mpesaRoute );
app.use('/api', medicationRoute)

app.use(errorHandling)

