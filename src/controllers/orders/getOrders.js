import Order from '../../models/order.js';

export const getOrders = async (req, res) => {

    const orders = await Order.find({ userId: req.user._id })
    .sort({ createdAt: -1 })
        .limit(5)
        .select('createdAt orderNumber amount status');
    
    res.status(200).json(orders);
};
