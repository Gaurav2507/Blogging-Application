const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, rquired: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamp: true }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
