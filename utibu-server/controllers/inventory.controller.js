import Inventory from "../models/inventory.model.js";

// Function to add or update inventory quantity for a medication
export const updateInventory = async (medicationId, quantity) => {
    try {
        // Find the inventory item for the specified medication
        let inventoryItem = await Inventory.findOne({ medication: medicationId });

        // If the inventory item exists, update its quantity
        if (inventoryItem) {
            inventoryItem.quantity += quantity;
        } else {
            // If the inventory item does not exist, create a new one
            inventoryItem = new Inventory({
                medication: medicationId,
                quantity
            });
        }

        // Save the updated or new inventory item
        await inventoryItem.save();
    } catch (error) {
        throw error;
    }
};

// Function to get all inventory items
export const getAllInventoryItems = async (req, res, next) => {
    try {
        const inventoryItems = await Inventory.find().populate('medication');
        res.status(200).json(inventoryItems);
    } catch (error) {
        next(error);
    }
};
