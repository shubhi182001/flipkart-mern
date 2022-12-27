import express from "express";
import { userSignin, userSignup } from "../controller/user-controller.js";
import { getProducts } from "../controller/product-controller.js";
const router = express.Router();
router.post("/signup" , userSignup);
router.post("/signin", userSignin);
router.get("/products", getProducts);

export default router;
