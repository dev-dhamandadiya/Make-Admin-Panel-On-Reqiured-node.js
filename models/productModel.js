import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:String,
    image:String,
    description: String,
    price:Number,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categoryTbl'
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subcategoryTbl'
    },
    extracategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'extracategoryTbl'
    }
    
},
{
    timestamps:true
});

const productModel = mongoose.model('productTbl' , productSchema)

export default productModel;