const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['Admin', 'Restaurant', 'User'],
    default: 'User'
  }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);
module.exports = User;