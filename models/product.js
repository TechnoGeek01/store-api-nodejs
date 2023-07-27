const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },

  price: { type: Number, required: [true, "must provide price"] },

  featured: { type: Boolean, default: false },

  rating: {
    type: Number,
    default: 4.5,
    min: [0, "rating must be at least 0"],
    max: [5, "rating must can not be more than 5"],
  },
  createdAt: { type: Date, default: Date.now },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", ProductSchema);
