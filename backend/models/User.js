import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // loginAttempts: {
    //   type: Number,
    //   default: 0
    // },
    // lockUntil: Number,
    
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
