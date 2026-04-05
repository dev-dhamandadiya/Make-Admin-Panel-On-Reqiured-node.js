import { Router } from "express";
import { createcategory, deletecategory, getallcategory, getsinglcategory, updatedcategory } from "../../controllers/apiController/category.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";


const categoryRouter = Router();

//create category
categoryRouter.post('/' ,imageUpload ,createcategory);

//get All category
categoryRouter.get('/' , getallcategory);

categoryRouter.get('/:id' , getsinglcategory); 

//delete category
categoryRouter.delete('/:id', deletecategory);

//updated category
categoryRouter.patch('/:id' , updatedcategory)




export default categoryRouter;
