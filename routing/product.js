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

// 특정 프로덕트를 삭제하는 api
routing.delete("/:productid", async (req,res)=> {
    await productModel.findByIdAndDelete(req.params.productid)
    res.json({
        msg: `delete product ${req.params.productid}`,

    })
})

//전체 프로덕트를 삭제하는 api
routing.delete("/", async (req, res) => {
    await productModel.deleteMany()
    res.json({
        msg: "deleted all products"
    })
})



export default routing

