import { Router } from "express";
import imageUpload from "../middlewares/imageUpload.js";
import subcategorycontroller from "../controllers/subcategory.controller.js";


const categoryRouter = Router();

categoryRouter.get('/create' , subcategorycontroller.addsubcategoryPage);
categoryRouter.post('/create' ,imageUpload, subcategorycontroller.subaddcategory);
categoryRouter.get('/view', subcategorycontroller.subviewcategory);
categoryRouter.get('/edit/:id', subcategorycontroller.subeditcategoryPage);
categoryRouter.post('/update/:id',imageUpload, subcategorycontroller.subupdatecategory);



export default categoryRouter;





