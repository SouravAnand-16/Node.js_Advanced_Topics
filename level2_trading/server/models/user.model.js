const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  assets: [
    {
      currency: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },
      amount: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

exports.module = User;
