import Product from "../models/product.models.js";

// Create New Product
export const createProduct = async (req, res) => {
    // console.log(req.body);
    // try {
    //     // Extract product details from request body
    //     const { name, description, price, category, stock, images } = req.body;

    //     // Check if all required fields are provided
    //     if (!name || !description || !price || !category || !stock || !images) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Please provide all required fields.",
    //         });
    //     }

        // Create product in the database
        const product = await Product.create(
            // name,
            // description,
            // price,
            // category,
            // stock,
            // images
            (req.body)
        );

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });

    // } catch (error) {
    //     console.error("Error in creating product:", error);
    //     res.status(500).json({
    //         success: false,
    //         message: "Internal Server Error",
    //         error: error.message
    //     });
    // }
};


export const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
      success: true,
      products
    });
  };
  
