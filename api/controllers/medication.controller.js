import Medication from "../models/medication.model.js";
import { updateInventory } from "./inventory.controller.js";


//adding a new medication to the database
export const createMedication = async (req, res, next) => {
    try {
        const {name, description, dosage, quantity,expiryDate,manufacturer} = req.body;

        const newMedication = new Medication({
            name,
            description,
            dosage,
            quantity,
            expiryDate,
            manufacturer
        })
        
        //saves medication to db
        await newMedication.save()
        
        // Update inventory with the new medication
        await updateInventory(newMedication._id, quantity);

        res.status(201).json({ message: 'Medication added successfully', medication: newMedication });
    } catch (error) {
        next(error)
    }
}

//getting all medications from the database
export const getMedication = async (req, res, next) => {
    try {
        const medications = await Medication.find();
        res
           .status(200)
           .json(medications)
    } catch (error) {
        next(error)
    }
}