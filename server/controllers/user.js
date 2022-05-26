import mongoose from 'mongoose';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try{
        const exitingUser = await User.findOne( { email } )

        if (!exitingUser) return res.status(400).json({message: "User does not exists!"})

        const isPasswordCorrect = await bcrypt.compare(password, exitingUser.password)

        if(!isPasswordCorrect) return res.status(404).json({message: "Invalid credentials"})

        const token = jwt.sign({email: exitingUser.email, id: exitingUser._id}, process.env.jwt_Secret, { expiresIn: "1h"})

        res.status(200).json({result: exitingUser, token})
    }
    catch(error) {
        res.status(500).json({message: "Somthing went wrong"})
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try{
        const exitingUser = await User.findOne({email})

        if(exitingUser) return res.status(400).json({message: "User already exists"})

        if(password !== confirmPassword) return res.status(400).json({message: "Password does not match"})

        const hashedPassword = await bcrypt.hash(password)

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({email: exitingUser.email, id: exitingUser._id}, process.env.jwt_Secret, {expiresIn:"1h"})

        res.status(200).json({result, token})
    }
    catch(error){
        res.status(500).json({message: "Something went wrong!"})
    }
}