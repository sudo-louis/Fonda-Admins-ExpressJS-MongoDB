const Product = require("../models/ProductModel");

const createProduct = async (req, res) => {
    try {
        const { name, price, category, provider } = req.body;
        const image = req.file ? req.file.filename : null;

        const newProduct = new Product({ name, price, category, provider, image });
        await newProduct.save();
        
        res.status(201).json({ message: "Producto creado", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProduct };