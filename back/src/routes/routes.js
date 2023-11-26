import express from "express";
import {
  signup,
  login,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/UserController.js";
import {
  addProduct,
  getProducts,
  singleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/ProductController.js";
import { loginValidation, signupValidation } from "../validation/Validate.js";
import authenticateToken from "../middleware/authenticateToken.js";
const router = express.Router();

router.post("/auth/signup", signupValidation, signup);
router.post("/auth/login", loginValidation, login);
router.get("/auth/profiles", authenticateToken, getAllUsers);
router.get("/auth/profile/:id", getSingleUser);
router.delete("/auth/delete/:id", deleteUser);
router.put("/auth/update/:id", updateUser);
router.post("/addProduct", addProduct);
router.get("/allProducts", getProducts);
router.get("/singleProduct/:id", singleProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;
