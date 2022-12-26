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