import { Schema, model } from "mongoose";
import User from "./users.js";
import Product from "./products.js";

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  description: String
  //items: [{type: OrderItems}]
});
const Order = model("Order", orderSchema);



const OrderItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: Product, 
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: Order,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 1
    },
    description: String
})

export const OrderItem = model('OrderItem', OrderItemSchema);
export default Order;
