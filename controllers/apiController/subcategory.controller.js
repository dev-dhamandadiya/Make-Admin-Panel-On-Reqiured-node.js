import subcategoryModel from "../../models/subcategoryModel.js";
import fs from "fs"

export const subcreatecategory = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        if (req.file) {
            req.body.image = req.file.path;
        }

        let subcategory = await subcategoryModel.create(req.body);
        return res.json(subcategory);

    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const subgetsinglcategory = async (req, res) => {
    try {
        const subcategory = await subcategoryModel.findById(req.params.id);
        return res.json(subcategory);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const subgetallcategory = async (req, res) => {
    try {
        const products = await subcategoryModel.find({});
        return res.json(products);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const subdeletecategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteproduct = await subcategoryModel.findByIdAndDelete(id);
        return res.json(deleteproduct);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}

export const subupdatedcategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatecategory = await subcategoryModel.findByIdAndUpdate(id, req.body);
        fs.unlinkSync(updatecategory.image);
        return res.json({ message: 'sucessfully' })
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
}