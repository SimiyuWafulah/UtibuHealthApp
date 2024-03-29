import Order from "../models/order.model.js";

//placing order
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

//order processing
export const processOrder = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findByIdAndUpdate(orderId, { status: 'shipped' }, { new: true });
        res.status(200).json({ message: 'Order processed successfully', order });
    } catch (error) {
        next(error);
    }
};


//order confirmation
export const confirmOrder = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findByIdAndUpdate(orderId, { status: 'confirmed' }, { new: true });
        res.status(200).json({ message: 'Order confirmed successfully', order });
    } catch (error) {
        next(error);
    }
};
