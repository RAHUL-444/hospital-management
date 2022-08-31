import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
  },
  type: {
    type: Number,
    
  },
  blood: {
    type: Number,
  },
  gender: {
    type: Number,
  },
  password: {
    type: String,
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
});
export default mongoose.model("User", userSchema);
// users
