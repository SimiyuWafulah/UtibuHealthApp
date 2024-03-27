import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'



export const signup = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;
        //check if user exists
        const existingAccount = await User.findOne({$or : [{email}, {username}]})
        if(existingAccount) return next(errorHandler(409, 'Account already exists'))
        //register new user
        const hashPassword = await bcryptjs.hash(password, 10);
        const newUser = User({username, email, password: hashPassword});
        await newUser.save();
        res
        .status(201)
        .json({message: 'Account created Successfuly'});
    } catch (error) {
        next(error)
    }
}