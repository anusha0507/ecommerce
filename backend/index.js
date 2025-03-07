import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import app from "./app.js";
import product from "./routes/product.routes.js"

const port = process.env.PORT || 5000;

app.use("/api/v1",product);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
