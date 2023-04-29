import express from "express"
import bodyParser from "body-parser";
const app = express()

// request, response test
// app.get("/test", (req, res) => {
//     res.json({
//         msg: "data get all"
//     })
// })


import practiceRouter from "./routing/practice.js"
import orderRouter from "./routing/order.js"

//middleware(설정)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.use("/practice",practiceRouter)
app.use("/order",orderRouter)
const port = 8080
app.listen(port, console.log(`server started at ${port}`))

//1. 위에서 아래로 인식한다
//2. = 기준으로 오른쪽으로 왼쪽으로 치환한다.
//3. . 은 하위 메소드를 호출한다.
//4. () 함수들의 모음으로 해석한다.
//5. 콤마는 그리고로 해석한다.
