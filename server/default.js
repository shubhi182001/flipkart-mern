import { products } from "./constants/data.js";
import Product from "./model/productSchema.js";
const DefaultData = async() => {
    try{
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("data successfully inserted");
    }catch(err){
        console.log(err.message);
    }
}

export default DefaultData;