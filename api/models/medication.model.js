import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    dosage: { type: String },
    quantity: { type: Number, default: 0 },
    expiryDate: { type: Date }, // Expiry date of the medication
    manufacturer: { type: String }, // Manufacturer of the medicine
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},{timestamps: true});

const Medication = mongoose.model("Medication", medicationSchema);

export default Medication;