import User from "../model/userSchema.js";

export const userSignup =async (req, res) => {
    try{
        
        const exsist = await User.findOne({username: req.body.username});
        if(exsist){
            return res.status(401).json({message: "username already exsists"})
        }
        const user  = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({message: user});

    }catch(e){
        res.status(500).json({message: e.message});
    }
}