import express from "express";
import { getAllProducts} from "../controllers/product.controllers.js";

const router = express.Router();


//routes
router.get("/products", getAllProducts);

export default router;