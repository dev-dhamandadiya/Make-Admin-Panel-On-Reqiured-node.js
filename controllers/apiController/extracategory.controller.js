import extracategoryModel from "../../models/extracategoryModel.js";
import fs from "fs"

export const extracreatecategory = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        if (req.file) {
            req.body.image = req.file.path;
        }

        let category = await extracategoryModel.create(req.body);
        return res.json(category);

    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const extragetsinglcategory = async (req, res) => {
    try {
        const category = await extracategoryModel.findById(req.params.id);
        return res.json(category);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const extragetallcategory = async (req, res) => {
    try {
        const products = await extracategoryModel.find({});
        return res.json(products);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const extradeletecategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteproduct = await extracategoryModel.findByIdAndDelete(id);
        return res.json(deleteproduct);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const extraupdatedcategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatecategory = await extracategoryModel.findByIdAndUpdate(id, req.body);
        fs.unlinkSync(updatecategory.image);
        return res.json({ message: 'sucessfully' })
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}