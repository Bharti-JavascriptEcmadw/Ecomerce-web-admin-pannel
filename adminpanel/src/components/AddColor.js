import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import cross icon

const AddColor = () => {
  const [colors, setColors] = useState([
    { id: 1, colorCode: "#000000", colorName: "Black" }, // Default color
  ]);

  // Function to handle color name input
  const handleColorNameChange = (id, newName) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id
          ? { ...color, colorName: newName, colorCode: getColorCode(newName) }
          : color
      )
    );
  };

  // Function to handle color code change
  const handleColorCodeChange = (id, newColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id ? { ...color, colorCode: newColor } : color
      )
    );
  };

  // Convert color name to HEX
  const getColorCode = (colorName) => {
    const fakeDiv = document.createElement("div");
    fakeDiv.style.color = colorName;
    document.body.appendChild(fakeDiv);
    const computedColor = window.getComputedStyle(fakeDiv).color;
    document.body.removeChild(fakeDiv);

    if (computedColor.includes("rgb")) {
      return rgbToHex(computedColor);
    }
    return "#000000"; // Default if invalid
  };

  // Convert RGB to HEX
  const rgbToHex = (rgb) => {
    const [r, g, b] = rgb.match(/\d+/g);
    return `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)}`;
  };

  // Add a new color field
  const addColorField = () => {
    setColors([
      ...colors,
      { id: Date.now(), colorCode: "#ffffff", colorName: "White" },
    ]);
  };

  // Remove a color card
  const removeColorField = (id) => {
    if (colors.length > 1) {
      setColors(colors.filter((color) => color.id !== id));
    } else {
      alert("At least one color must be present!");
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/color", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ color: colors }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("Colors Submitted Successfully!");
        setColors([{ id: 1, colorCode: "#000000", colorName: "Black" }]); // Reset
      } else {
        alert("Error submitting colors. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add Colors 🎨
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-6">
          {colors.map((color) => (
            <div key={color.id} className="relative w-full sm:w-[48%] border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition">
              
              {/* Cross Button to Remove */}
              <button
                onClick={() => removeColorField(color.id)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition"
              >
                <AiOutlineClose size={20} />
              </button>

              {/* Color Name Input */}
              <label className="block text-gray-700 font-medium mb-1">
                Color Name (e.g., Red, Blue)
              </label>
              <input
                type="text"
                value={color.colorName}
                onChange={(e) => handleColorNameChange(color.id, e.target.value)}
                className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
                placeholder="Type a color name"
              />

              {/* Color Picker */}
              <div className="mt-3 flex items-center justify-between">
                <label className="block text-gray-700 font-medium">
                  Pick Color:
                </label>
                <input
                  type="color"
                  value={color.colorCode}
                  onChange={(e) => handleColorCodeChange(color.id, e.target.value)}
                  className="w-12 h-12 border rounded-md cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={addColorField}
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition shadow-md"
          >
            + Add More Color
          </button>
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
