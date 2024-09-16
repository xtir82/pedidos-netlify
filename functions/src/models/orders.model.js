import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    date: String,
    description: String,
    customer_name: String,
    ammount: String,
    status: String
})

export const ordersModel = model('orders', ordersSchema);