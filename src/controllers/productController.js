const Product = require("../models/ProductModel");

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category provider");
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un producto
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

// Actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const { name, price, category, provider } = req.body;
        const image = req.file ? req.file.filename : null;

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
            { name, price, category, provider, image }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto actualizado", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };