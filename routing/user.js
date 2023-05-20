import express from "express";
import userModel from "../models/user.js";
const routing = express.Router()


// 회원 가입
routing.post("/register",(req,res) => {
    res.json({
        msg: "Register"
    })
})

// 로그인

routing.post("/login", (req,res) => {
    res.json({
        msg: "Login"
    })
})

// 프로필 정보 가져오기

routing.get("/profile", (req,res) => {
    res.json ({
        msg: profile
    })
})








export default routing
