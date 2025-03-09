import express from "express";
import { createProduct, getAllProducts} from "../controllers/product.controllers.js";

const router = express.Router();


//routes
router.route("/products").get(getAllProducts).post(createProduct);

export default router;