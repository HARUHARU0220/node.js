import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        product: String,
        qty: Number,
        memo: String,
        address: String
    },
    {
        timestamps: true
    }
)


const orderModel = mongoose.model('order',orderSchema)


export default orderModel



