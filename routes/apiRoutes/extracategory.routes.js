import { Router } from "express";
import { extracreatecategory, extradeletecategory, extragetallcategory, extragetsinglcategory, extraupdatedcategory } from "../../controllers/apiController/extracategory.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";


const extracategoryRouter = Router();


//create extracategory
extracategoryRouter.post('/' ,imageUpload ,extracreatecategory);


//get All extracategory
extracategoryRouter.get('/' , extragetallcategory);

//get single extracategory
extracategoryRouter.get('/:id' , extragetsinglcategory);


//delete extracategory
extracategoryRouter.delete('/:id', extradeletecategory);

//updated extracategory
extracategoryRouter.patch('/:id' , extraupdatedcategory);

export default extracategoryRouter;