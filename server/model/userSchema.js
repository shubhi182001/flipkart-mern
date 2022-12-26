import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
        min: 5,
        max: 30
    },
    lastname:{
        type: String,
        trim: true,
        required: true,
        min: 5,
        max: 30
    },
    username:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        indec: true,
        lowercase: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }

})

const User = mongoose.model("user", userSchema);
export default User;