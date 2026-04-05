import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userController = {

    dashboard(req, res) {
        return res.render('index');
    },

    // REGISTER
   async registerUser(req, res) {
    try {
        const { name, email, password } = req.body || {};
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.send("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        return res.redirect('/login');

    }catch (error) {
    console.log("REGISTER ERROR:", error.message);
    return res.send(error.message); 
}
},

    // LOGIN PAGE
    loginPage(req, res) {
        res.render('./pages/login.ejs');
    },

    // LOGIN
 async login(req, res) {
    try {
        const { email, password } = req.body;

        // check user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.send("User not found"); 
        }

        // check password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.send("Invalid Password"); 
        }

        // create token
        const payload = {
            id: user._id,
            name: user.name
        };

        const token = jwt.sign(payload, "secret", {
            expiresIn: '1h' 
        });

        // store token
        res.cookie('token', token, { httpOnly: true });

        return res.redirect('/');

    } catch (error) {
        console.error(error);
        return res.redirect('/login');
    }
},

    // REGISTER PAGE
    register(req, res) {
        return res.render('pages/register');
    }
};

export default userController;