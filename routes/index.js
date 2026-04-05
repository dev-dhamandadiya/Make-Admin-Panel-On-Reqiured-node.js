import { Router } from "express";
import apiRouter from "./apiRoutes/index.js";
import categoryRouter from "./caterogy.routes.js";
import subcategoryRouter from "./subcategory.routes.js";
import extracategoryRouter from "./extracategory.routes.js";
import userRoutes from "./adminPanel.routes.js";
import productRouter from "./product.routes.js";

const router = Router();
router.use('/api' , apiRouter);
router.use('/' , userRoutes);
router.use('/product', productRouter);
router.use('/category' , categoryRouter);
router.use('/subcategory' , subcategoryRouter);
router.use('/extracategory' , extracategoryRouter);



export default router;