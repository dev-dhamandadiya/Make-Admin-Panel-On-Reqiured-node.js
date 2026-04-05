import { Router } from "express";
import { subcreatecategory, subdeletecategory, subgetallcategory, subgetsinglcategory, subupdatedcategory } from "../../controllers/apiController/subcategory.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";

const subcategoryRouter = Router();

//create subcategory
subcategoryRouter.post('/' ,imageUpload ,subcreatecategory);


//get All subcategory
subcategoryRouter.get('/' , subgetallcategory);


//get single subcategory
subcategoryRouter.get('/:id' , subgetsinglcategory);

//delete subcategory
subcategoryRouter.delete('/:id', subdeletecategory);

//updated subcategory
subcategoryRouter.patch('/:id' , subupdatedcategory);



export default subcategoryRouter;