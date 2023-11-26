import Product from "../models/ProductModel.js";

const addProduct = async (req, res) => {
  try {
    const { prodName, description } = req.body;
    const existingProdct = await Product.findOne({ prodName });
    if (existingProdct) {
      return res.status(400).json({ message: "This product already exist" });
    }
    const product = await Product.create({ prodName, description });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

const singleProduct = async (req, res) => {
  try {
    const userId = req.params.id;
    const product = await Product.findOne({ _id: userId });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Internal server error. Please try again later.",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const userId = req.params.id;
    const product = await Product.deleteOne({ _id: userId });
    if (product.deletedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { prodName, description } = req.body;
  const userId = req.params.id;
  try {
    const product = await Product.findById(userId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (prodName) product.prodName = prodName;
    if (description) product.description = description;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { addProduct, getProducts, singleProduct, deleteProduct, updateProduct };
