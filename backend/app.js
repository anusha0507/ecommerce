import express from "express";
import connectToDB from "./db/connect.db.js";
import product from "./routes/product.routes.js"

const app = express();

connectToDB();

//Middlewares
app.use(express.json())

//Routes
app.use("/api/v1",product);

export default app;
