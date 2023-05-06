import express from "express";
import productModel from "../models/product.js";
const routing = express.Router()


// Product 전체 데이터를 가져오는 API
routing.get("/", async (req,res) => {
    const products = await productModel.find()
    res.json({
        msg: "Product get all",
        products: products
    })
})

// 상세 프로덕트를 가져오는 API

routing.get("/:productid", async (req, res) => {
    const product = await productModel.findById(req.params.productid)
    res.json({
        msg: "Product detail get",
        product : product
    })
})



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

