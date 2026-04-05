import { Router } from "express";
import userController from "../controllers/adminPanel.controller.js";

const userRoutes = Router();

// LOGIN
userRoutes.get('/login', userController.loginPage);   // show login page
userRoutes.post('/login', userController.login);      // handle login

// REGISTER
userRoutes.get('/register', userController.register);       // show register page
userRoutes.post('/register', userController.registerUser);  // handle register

// DASHBOARD / HOME
userRoutes.get('/', userController.dashboard);

export default userRoutes;