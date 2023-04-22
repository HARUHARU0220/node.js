import express, {} from "express";
const routing = express.Router()


// practice 관련된 API를 이곳에 설계한다.
// practice와 관련된 데이터를 불러오고 등록하고 수정하고 삭제하는 기능을 만든다.

// practice를 가져오는 API
routing.get("/new",(req,res) => {
    res.json({
        msg: "new practice"
    })
})

// practice를 등록하는 API

routing.post("/create",(req,res) =>{

    const newPractice = {
        name: req.body.practiceName,
        age: req.body.practiceAge,
        address: req.body.practiceAddress,
        email: req.body.practiceEmail
    }

    res.json({
        msg: "create practice",
        result: newPractice
    })
})

// practice를 수정하는 API
routing.put("/",(req, res)=>{
    res.json({
        msg:"update practice"
    })
})

//practice 삭제하는 API
routing.delete("/", (req, res) =>{
    res.json({
        msg:"delete practice"
    })
})

export default routing
