import { generateToken } from "../utils/jwt";
import db from "../models"

const User = db.User()

export async function login(req, res){
    const {fullName, password} = req.body;
    const user = await User.findOne({ where: { fullName } });

    if(!user) return res.status(404).json({message: "User not found"})

    const token = generateToken({id: user.id, fullName: user.fullName})
    res.json({token})
}