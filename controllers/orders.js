import Order, {OrderItem} from "../models/orders.js";
import { createError } from "../utils/errors.js";


export const createOrder = async (req, res, next) => {
  try {
    const {customer, description} = req.body;
    // validating data
    if(!customer){
        throw createError(400, 'Not enought data for create an order')
    }

    // add order
    const newOrder = await Order.create({customer, description});

    // add order items
    const {items} = req.body
    if(!items.length){
        throw createError(400, "Not enought data for order items");
    }
    items.forEach(item=>item.order = newOrder._id)
    console.log(items);
    const result = await OrderItem.insertMany(items);
    
    // send response
    res.json({
        msg: 'ordered successfully', 
        order: {newOrder, orderItems: result}
    });

  } catch (error) {
    next(error);
  }
};
