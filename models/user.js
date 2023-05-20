import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        // id, password, 이름, 생년월일, 성별, 이메일, 휴대전화
        userId : {
            type: String,
            unique : true,
            required : true
        },
        password: {
            type: String,
            required : true
        },
        userName: {
            type: String,
            required : true
        },

        birthday : Number,


        // 1. 남자 2. 여자 3. 선택없음
        gender : {
            type: Number,
            default: 1
        },

        email : {
            type: String,
            unique: true,
            required : true
        },

        phone : {
            type: Number,
            required : true
        }

    },
    {
        timestamps : true
    }

)

const userModel = mongoose.model('user',userSchema)
export default userModel