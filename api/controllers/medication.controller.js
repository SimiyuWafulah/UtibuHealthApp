import Medication from "../models/medication.model.js";


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
        await newMedication.save()
        res
           .status(201)
           .json('Medication added Successfully', newMedication)
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