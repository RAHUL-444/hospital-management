import User from "../model/User";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password, gender, birthday, type, id } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already Exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    gender,
    birthday,
    type,
    id,
    blogs: [],
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { name, email, password, gender, birthday, type, id } = req.body;
  let existingUser;
  let existingUserType = false;
  try {
    existingUser = await User.findOne({ email });
    if ((await existingUser.type) == type) {
      existingUserType = true;
    }
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldnt Find User By This Email & type" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  if (existingUserType == false) {
    return res.status(400).json({ message: "Incorrect User Type Selected" });
  }
  if (existingUserType == true && isPasswordCorrect && existingUser) {
    return res
      .status(200)
      .json({ message: "Login Successfull", user: existingUser });
  }
};
