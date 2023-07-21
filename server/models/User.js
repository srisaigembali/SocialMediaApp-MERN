import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("users", UserSchema);
export default User;
