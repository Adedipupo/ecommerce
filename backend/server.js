import express from "express";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";
import orderRoute from "./routes/orderRoutes.js";
import uploadRoute from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'))
}

app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api", productRoute);
app.use("/api/user", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/upload", uploadRoute);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`.yellow.bold);
});
