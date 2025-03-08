const Category = require("../models/CategoryModel");

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        
        res.status(201).json({ message: "Categoría creada", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createCategory };