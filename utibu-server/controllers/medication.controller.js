import Medication from "../models/medication.model.js";
import { updateInventory } from './inventory.controller.js'
import { diseasesAndMedications } from '../data/chronicDiseases.js'

//add medications from chronic disease data to the database
export const addMedicationsFromChronicDisease = async () => {
    try {
        for (const disease of diseasesAndMedications) {
            for (const medicationName of disease.medications) {
                const existingMedication = await Medication.findOne({ name: medicationName });
                if (!existingMedication) {
                    const newMedication = new Medication({
                        name: medicationName,
                        description: `Medication for ${disease.name}`,
                        dosage: "As prescribed by the doctor",
                        quantity: 0, // Set initial quantity to 0
                        expiryDate: new Date(), // Set to current date, update as needed
                        manufacturer: "Unknown" // Update as needed
                    });
                    await newMedication.save();

                    //updates the inventory
                    await updateInventory(newMedication._id)
                }
            }
        }
    } catch (error) {
        console.error("Error adding medications:", error);
    }
};

// Add medications from chronic disease data to the database
addMedicationsFromChronicDisease();

//creates new meds and add to chronicDiseases array
export const createMedications = async (req, res) => {
    try {
        const medicationsData = req.body;

        for (const medicationData of medicationsData) {
            const { name } = medicationData;

            // Check if the medication already exists in the chronic diseases array
            const existingMedication = chronicDiseases.find(disease => disease.medications.includes(name));

            if (!existingMedication) {
                // Medication does not exist in the chronic diseases array, so add it
                chronicDiseases.push({ name, disease: 'Other', category: 'Other' });
            }

            // Create or update medication in the database
            let medication = await Medication.findOne({ name });

            if (medication) {
                // Update existing medication
                medication.set(medicationData);
            } else {
                // Create new medication
                medication = new Medication(medicationData);
            }

            await medication.save();
        }

        res.status(201).json({ message: 'Medications created or updated successfully' });
    } catch (error) {
        console.error('Error creating or updating medications:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


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