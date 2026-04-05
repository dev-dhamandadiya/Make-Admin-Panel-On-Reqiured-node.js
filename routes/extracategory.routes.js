import { Router } from "express";
import imageUpload from "../middlewares/imageUpload.js";
import extracategorycontroller from "../controllers/extracategory.controller.js";


const extracategoryRouter = Router();

extracategoryRouter.get('/create' , extracategorycontroller.addextracategoryPage);
extracategoryRouter.post('/create' ,imageUpload, extracategorycontroller.extraaddcategory);
extracategoryRouter.get('/view', extracategorycontroller.extraviewcategory);
extracategoryRouter.get('/edit/:id', extracategorycontroller.extraeditcategoryPage);
extracategoryRouter.post('/update/:id',imageUpload, extracategorycontroller.extraupdatecategory);



export default extracategoryRouter;





