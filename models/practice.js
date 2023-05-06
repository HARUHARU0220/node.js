import mongoose from "mongoose";

const practiceSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        email: String
    },
    {
        timestamps: true
    }
)



const practiceModel = mongoose.model('practice', practiceSchema)

export default practiceModel