import express from "express";
import userModel from "../models/user.js";
const routing = express.Router()


// 회원 가입
// id, password, 이름, 생년월일, 성별, 이메일, 휴대전화
routing.post("/register",async (req,res) => {
    const newUser = new userModel ({
        userId: req.body.userId,
        password: req.body.userPassword,
        userName: req.body.userName,
        gender: req.body.userGender,
        email: req.body.userEmail,
        phone: req.body.userPhone
    })

    await newUser.save()


    res.json({
        msg: "Register",
        result: newUser
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
