import { Router } from "express";
import categoryRouter from "./category.routes.js";
import subcategoryRouter from "./subcategory.routes.js";
import extracategoryRouter from "./extracategory.routes.js";
import productRouter from "./product.routes.js";
import userRouter from "./user.routes.js";

const apiRouter = Router();

apiRouter.use('/user' , userRouter)
apiRouter.use('/product' , productRouter)
apiRouter.use('/category' , categoryRouter);
apiRouter.use('/subcategory' , subcategoryRouter);
apiRouter.use('/extracategory' , extracategoryRouter);


export default apiRouter;