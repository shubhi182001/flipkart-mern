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

export const userSignin = async(req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        
        const validUser = await User.findOne({username: username, password: password});
        if(validUser){
            return res.status(200).json( { data:validUser});
        }
        else{
            return res.status(401).json('Invalid login')
        }

    }catch(e){
        res.status(500).json('error', e.message);
    }
}