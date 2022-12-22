import mongoose from "mongoose";

export const Connection = () =>{
    try{
        
    } catch(e){
        console.log(`Error while connecting to database ${e}`);
    }
}

export default Connection