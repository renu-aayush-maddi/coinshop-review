import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import analyticsRoutes from "./routes/analytics.route.js"
import reviewRoutes from "./routes/review.route.js";
import cors from "cors"
import path from "path";




const app = express()
dotenv.config();
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();


app.use(express.json({limit:"10mb"}));
app.use(cookieParser());

app.use(cors());
app.use("/api/auth" , authRoutes)
app.use("/api/products",productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/coupons",couponRoutes)
app.use("/api/payments",paymentRoutes)
app.use("/api/analytics",analyticsRoutes)

app.use("/api/reviews", reviewRoutes);



if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}



app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`)
    connectDB();
})

