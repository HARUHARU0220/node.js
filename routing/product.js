import express from "express";
import productModel from "../models/product.js";
const routing = express.Router()

routing.post("/",async (req,res)=>{
    // name, price, description, stock
    const newProduct = new productModel ({
        name: req.body.productName,
        price: req.body.productPrice,
        description: req.body.productDescription,
        stock: req.body.productStock
    })


    await newProduct.save()


    res.json({
        msg:"create product",
        result:newProduct
    })
})


export default routing

