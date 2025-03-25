import colorModel from "../models/colorModel.js";

export const addcolor = async (req, res) => {
  try {
    const { color } = req.body;
    console.log(color)

    // Validate input
    if (!color || !Array.isArray(color) || color.length === 0) {
      return res.status(400).json({ success: false, error: "Invalid color data" });
    }

    // Save colors in MongoDB
    const savedColors = await colorModel.insertMany(color);

    res.status(201).json({
      success: true,
      message: "Colors added successfully!",
      data: savedColors,
    });
  } catch (error) {
    console.error("Error saving colors:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
