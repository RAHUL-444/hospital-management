import User from "../model/User";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  ``;
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { fname, lname, email, password, gender, date, blood, type, id } =
    req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ status: 401, message: "User Already Exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    fname,
    lname,
    email,
    password: hashedPassword,
    gender,
    blood,
    date,
    type,
    id,
    blogs: [],
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user, status: 200 });
};

export const login = async (req, res, next) => {
  const { fname, lname, email, password, blood, gender, date, type, id } =
    req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ status: 404, message: "Couldnt Find User By This Email & type" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ status: 402, message: "Incorrect Password" });
  }
  if (isPasswordCorrect && existingUser) {
    if (existingUser.type === type) {
      return res.status(200).json({
        status: 200,
        message: "Login Successfull",
        user: existingUser,
      });
    } else {
      return res
        .status(400)
        .json({ status: 402, message: "Incorrect User Type" });
    }
  }
};
