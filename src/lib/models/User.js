import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  imageUrl: { type: String, required: false },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;