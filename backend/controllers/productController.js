const Product = require('../models/Product');
const getProducts = async (req , res ) => {
try {
const products = await Product.find({ userId: req.user.id });
res.json(products);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const addProduct = async (req , res ) => {
const { title, description, deadline } = req.body;
try {
const product = await Product.create({ userId: req.user.id, title, description, deadline });
res.status(201).json(product);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const updateProduct = async (req , res ) => {
const { title, description, completed, deadline } = req.body;
try {
const product = await Product.findById(req.params.id);
if (!product) return res.status(404).json({ message: 'Product not found' });
product.title = title || product.title;
product.description = description || product.description;
product.completed = completed ?? product.completed;
product.deadline = deadline || product.deadline;
const updatedProduct = await product.save();
res.json(updatedProduct);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const deleteProduct = async (req , res ) => {
try {
const product = await Product.findById(req.params.id);
if (!product) return res.status(404).json({ message: 'Product not found' });
await product.remove();
res.json({ message: 'Product deleted' });
} catch (error) {
res.status(500).json({ message: error.message });
}
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
