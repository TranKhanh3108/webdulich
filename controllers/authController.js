import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Name is required" });
    }
    if (!password) {
      return res.send({ error: "Name is required" });
    }
    if (!phone) {
      return res.send({ error: "Name is required" });
    }
    if (!address) {
      return res.send({ error: "Name is required" });
    }

    //check user
    const existingUser = await userModel.findOne({ email });

    //người dùng đang tồn tại
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Người dùng đã tồn tại",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Thêm người dùng thành công",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Thêm người dùng lỗi ",
      error,
    });
  }
};

//POST Login
export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Sai email hoặc mật khẩu",
      });
    }
    // hàm kiểm tra người dùng
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email chưa được đăng kí",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Mật khẩu không đúng",
      });
    }

    //token
    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      } //giữ người dùng trong 7 ngày
    );
    res.status(200).send({
      success: true,
      message: "Đăng nhập thành công",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Đăng nhập không thành công",
      error,
    });
  }
};

//Test Controller
export const testController = (req, res) => {
  try {
    res.send("ADMIN");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

