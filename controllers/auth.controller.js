import jwt from "jsonwebtoken";
import User from "../models/user";
import Roles from "../models/role";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;

const signUp = async (req, res) => {
  const { email, password, roles } = req.body;
  const newUser = new User({
    email: email,
    password: await User.passwordCode(password),
    //password: password,
  });

  if (roles) {
    const searchRoles = await Roles.find({ name: { $in: roles } });
    newUser.roles = searchRoles.map((role) => role._id);
  } else {
    const role = await Roles.findOne({ name: "user" });
    newUser.roles = [role._id];
    newUser.roles;
  }
  await newUser.save();
  //const saveUser=await newUser.save()
  const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1d" });
  res.status(200).json({ token });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const searchEmail = await User.findOne({ email: email });
  if (searchEmail) {
    const searchPass = await bcrypt.compare(password, searchEmail.password);
    if (searchPass) {
      const token = jwt.sign({ id: searchEmail._id }, SECRET, {
        expiresIn: "1d",
      });
      res.status(200).json({
        token,
      });
    } else {
      res.status(204).json({
        msg: "password incorrecto",
      });
    }
  } else {
    res.status(204).json({
      msg: "email incorrecto",
    });
  }
};

module.exports = {
  signUp,
  signIn,
};
