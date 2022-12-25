import mongoose, { mongo } from "mongoose";

mongoose.set('strictQuery', true);

export const Connection = async(username, password) =>{
    const URL= `mongodb+srv://${username}:${password}@flipkart.j3dfnf9.mongodb.net/FLIPKART-MERN?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL)
        console.log("database connected successfully");
    } catch(e){
        console.log(`Error while connecting to database ${e}`);
    }
}

export default Connection