import { Router } from "express";
import productController from "../controllers/product.controller.js";
import imageUploads from "../middlewares/imageUpload.js";

const productRouter = Router()

productRouter.get('/create', productController.addproductPage)
productRouter.post('/create', imageUploads,productController.addProduct)
productRouter.get('/view', imageUploads, productController.viewProducts)
// // Edit page open
productRouter.get('/edit/:id', imageUploads, productController.editproductPage);
productRouter.get('/delete/:id', productController.deleteproduct);

// Update product
productRouter.post('/update/:id',imageUploads, productController.updateproduct);

export default productRouter