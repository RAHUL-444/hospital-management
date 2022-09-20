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
  mobile: {
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
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Doctor", required: true }],
});
export default mongoose.model("Doctor", userSchema);
// users
