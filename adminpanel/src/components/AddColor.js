import React, { useState } from "react";
import colornamer from "color-namer"; // Import color-namer library

const AddColor = () => {
  const [colors, setColors] = useState([
    { id: 1, colorCode: "#000000", colorName: "Black" }, // Only 1 card initially
  ]);

  // Function to get color name from hex
  const getColorName = (hex) => {
    const name = colornamer(hex).basic[0]?.name; // Get closest basic color name
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : "Unknown";
  };

  // Handle color change
  const handleColorChange = (id, newColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id ? { ...color, colorCode: newColor, colorName: getColorName(newColor) } : color
      )
    );
  };

  // Add a new color field (one at a time)
  const addColorField = () => {
    setColors([
      ...colors,
      { id: colors.length + 1, colorCode: "#ff0000", colorName: "Red" },
    ]);
  };

  // Handle final submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Colors:", colors);
    alert("Colors Submitted Successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add Colors 🎨
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Display colors in a flexible grid (wraps when full) */}
        <div className="flex flex-wrap gap-6">
          {colors.map((color) => (
            <div
              key={color.id}
              className="w-full sm:w-[48%] border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              {/* Color Name Field */}
              <label className="block text-gray-700 font-medium mb-1">
                Color Name
              </label>
              <input
                type="text"
                value={color.colorName}
                className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
                readOnly
              />

              {/* Color Picker */}
              <div className="mt-3 flex items-center justify-between">
                <label className="block text-gray-700 font-medium">
                  Pick Color:
                </label>
                <input
                  type="color"
                  value={color.colorCode}
                  onChange={(e) => handleColorChange(color.id, e.target.value)}
                  className="w-12 h-12 border rounded-md cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Add More Colors Button */}
          <button
            type="button"
            onClick={addColorField}
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition shadow-md"
          >
            + Add More Color
          </button>

          {/* Final Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
          >
            Submit Colors
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddColor;
