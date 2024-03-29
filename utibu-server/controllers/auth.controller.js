import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



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

export const signin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        //check if email exists
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(400, 'Acconut does not exist'))
        //verify password
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(404,'Incorrect email or password'))
        
        const token = jwt.sign({id: validUser._id, isAdmin: validUser.isAdmin}, process.env.JWT_KEY);
        const {password: pass, ...rest} = validUser._doc

        res
        .cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error)
    }
}