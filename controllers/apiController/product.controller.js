import productModel from "../../models/productModel.js";
import fs from "fs"


export const productcreate = async (req, res) => {
    try {
        let product = await productModel.create(req.body);
        return res.json(product);

    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const getsingleproduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id).populate("category").populate("subcategory").populate("extracategory");
       return res.json({ success: true, product });

    } catch (error) {
        return res.json({ error: error.message });
    }
};

export const getallproduct = async (req,res)=>{
    try {
        const product = await productModel.find({}).populate('category').populate('subcategory').populate('extracategory')
        return res.json(product);
    } catch (error) {
        return res.json({ error: error.message });
    }
};

export const productdelete = async (req,res) =>{
    try {
        const {id} = req.params;
        const deleteproduct = await productModel.findByIdAndDelete(id);
        return res.json(deleteproduct);
    } catch (error) { 
        return res.json({ error: error.message });
    }
}

  export const productupdated = async (req,res) =>{
    try {
        const {id} = req.params;



        const update = await productModel.findByIdAndUpdate(id,req.body);

        return res.json({message : "success"} , update);
    } catch (error) {
        return res.json({error : error.message})
    }
}