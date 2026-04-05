import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema(
    {
        name : String,
        image : String
    },
    {
        timestamps:true
    }
)

const subcategoryModel = mongoose.model('subcategoryTbl' , subcategorySchema);

export default subcategoryModel;