import userModel from "../../models/user.model.js";
import bycrpt from "bcryptjs"

export const createUser = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const user = await userModel.create(req.body);
        console.log(user);

        return res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const getAllUser = async (req, res) => {
    try {
        let users = await userModel.find({});
        return res.json(users);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        return res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const dltUser = await userModel.findByIdAndDelete(id);
        return res.json(dltUser);
    } catch (error) {
        console.log(error.message);
        return res.json({ error: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json(updatedUser);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
