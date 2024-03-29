import mongoose from 'mongoose'

const inventorySchema = new mongoose.Schema({
    medication: { type: mongoose.Schema.Types.ObjectId, ref: 'Medication', required: true }, // Reference to the medication model
    quantity: { type: Number, default: 0 }, // Quantity of the medication available in stock
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now } 
}, {timestamps: true});

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;