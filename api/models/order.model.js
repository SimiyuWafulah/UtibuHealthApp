import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    customerId : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    medication : {
        name :{type: String,required: true},
        quantity: {type:Number, required: true},
        dosage: {type: String}
    },
    status: {type: String, enum : ['pending','confirmed','shipped', 'delivered'], default:'pending'},
    createdAt :{type: Date, default: Date.now},
    updatedAt :{type: Date, default: Date.now}
},{timestamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order