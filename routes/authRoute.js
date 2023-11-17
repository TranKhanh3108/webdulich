import express from "express";
import {
  registerController,
  LoginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//
const router = express.Router();

//routing
//dangnhap || dung` POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", LoginController);

//Kiểm tra route
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
