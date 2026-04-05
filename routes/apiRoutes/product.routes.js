import { Router } from "express";
import { getallproduct, getsingleproduct, productcreate, productdelete, productupdated } from "../../controllers/apiController/product.controller.js";
import imageUpload from "../../middlewares/imageUpload.js";


const productRouter = Router();


//create category
productRouter.post('/' ,imageUpload ,productcreate);

//get All category
productRouter.get('/' , getallproduct);

//get single category
productRouter.get('/:id' , getsingleproduct);


//delete category
productRouter.delete('/:id', productdelete);

//updated category
productRouter.patch('/:id', imageUpload , productupdated)


export default productRouter;