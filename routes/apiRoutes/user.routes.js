import { Router } from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../../controllers/apiController/user.controller.js";


const userRouter = Router();

//user created
userRouter.post('/',createUser)

//get all user
userRouter.get('/', getAllUser);

//get seprate user
userRouter.get('/:id', getUser);

// update user
userRouter.put('/:id', updateUser);

//delet user
userRouter.delete('/:id',deleteUser)
export default userRouter;