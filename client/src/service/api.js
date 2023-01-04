import axios from 'axios';


const URL = 'http://localhost:8000';



export const authenticateSignup = async(data) => {
    try{
        return await  axios.post(`${URL}/signup`, data)
    }
    catch(e) {
        console.log("signup error", e);
    }
}

export const authenticateSignin = async(data) => {
    try{
        return await axios.post(`${URL}/signin`,data)
    }
    catch(e){
        console.log("signin error", e);
    }
}

export const payUsingPaytm = async(data) => {
    try{
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    }catch(e){
        console.log("Error while calling paytm Api", e);
    }
}