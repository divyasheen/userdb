import { createError } from "../utils/errors.js";
import User from '../models/users.js';

export const register = async(req, res, next) => {
    try {
        const {name, address, email, password, role} = req.body;
        if(!name || !address || !email || !password){
            throw createError(400, '❌ Not enough data to register a user!');
        }

        const newUser = await User.create({name, address, email, password, role});

        res.json({msg: 'register successfully', newUser});

    } catch (error) {
        next(error)
    }
}