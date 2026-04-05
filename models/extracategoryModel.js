import mongoose from "mongoose";

const extracategorySchema = new mongoose.Schema(
    {
        name : String,
        image : String
    },
    {
        timestamps:true
    }
)

const extracategoryModel = mongoose.model('extracategoryTbl' , extracategorySchema);

export default extracategoryModel;