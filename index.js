import express from "express"
const app = express()

// request, response test
app.get("/test", (req, res) => {
    res.json({
        msg: "data get all"
    })
})



const port = 8080
app.listen(port, console.log("server start"))

//1. 위에서 아래로 인식한다
//2. = 기준으로 오른쪽으로 왼쪽으로 치환한다.
//3. . 은 하위 메소드를 호출한다.
//4. () 함수들의 모음으로 해석한다.
//5. 콤마는 그리고로 해석한다.
