import { Router } from "express";
import categorycontroller from "../controllers/category.controller.js";
import imageUpload from "../middlewares/imageUpload.js";



const categoryRouter = Router();

categoryRouter.get('/create' , categorycontroller.addcategoryPage);
categoryRouter.post('/create' ,imageUpload, categorycontroller.addcategory);
categoryRouter.get('/view', categorycontroller.viewcategory);
categoryRouter.get('/edit/:id', categorycontroller.editcategoryPage);
categoryRouter.post('/update/:id',imageUpload, categorycontroller.updatecategory);



export default categoryRouter;





