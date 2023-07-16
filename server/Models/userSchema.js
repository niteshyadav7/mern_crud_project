import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Must Have Name"],
  },
  age: {
    type: String,
    required: [true, "Must Have Age"],
  },
  phone: {
    type: String,
    unique: true,
    required: [true, "Must Have Phone Number"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
