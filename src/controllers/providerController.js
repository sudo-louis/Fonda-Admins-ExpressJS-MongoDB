const Provider = require("../models/ProviderModel");

const createProvider = async (req, res) => {
    try {
        const { name, contact } = req.body;
        const image = req.file ? req.file.filename : null;

        const newProvider = new Provider({ name, contact, image });
        await newProvider.save();
        
        res.status(201).json({ message: "Proveedor creado", provider: newProvider });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProvider };