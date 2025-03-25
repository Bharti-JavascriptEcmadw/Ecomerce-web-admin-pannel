import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  colorCode: {
    type: String,
    required: true,
    match: /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, // Hex color validation
  },
  colorName: {
    type: String,
    required: true,
    trim: true,
  },
});

const Color = mongoose.model("Color", colorSchema);

export default Color;
