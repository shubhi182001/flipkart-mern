import Product from '../model/productSchema.js'

export const getProducts = async(req, res) => {
    try{    
        const products = await Product.find({});
        res.status(200).json(products);

    }catch(e){
        res.status(500).json({message: e.message});
    }
}

export const getProductById = async(req, res) => {
    try{
        const id = req.params.id;
        const details = await Product.findOne({'id' : id});
        res.status(200).json(details);
    }
    catch(e){
        res.status(500).json({message: e.message});
    }
}