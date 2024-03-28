import Order from "../models/order.model.js";

export const createOrder = async (req, res, next) => {
    try {
        const {customerId, medication} = req.body

        if(!customerId || !medication) return next(404,'CustomerId and medication fileds are required')

        const newOrder = new Order({customerId, medication})
        await newOrder.save()
        res
        .status(201)
        .json('Order placed Successfully',newOrder)
    } catch (error) {
        next(error)
    }
}