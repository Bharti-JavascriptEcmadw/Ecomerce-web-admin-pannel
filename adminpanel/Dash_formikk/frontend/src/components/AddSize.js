import React, { useState } from "react";

const AddSize = () => {
  const [sizes, setSizes] = useState([{ id: 1, size: "" }]); // Default one size field

  // Handle size change
  const handleSizeChange = (id, value) => {
    setSizes((prevSizes) =>
      prevSizes.map((s) => (s.id === id ? { ...s, size: value } : s))
    );
  };

  // Add a new size field (one at a time)
  const addSizeField = () => {
    setSizes([...sizes, { id: sizes.length + 1, size: "" }]);
  };

  // Handle final submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sizes Submitted:", sizes);
    alert("Sizes Submitted Successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add Sizes 📏
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Size Fields */}
        <div className="flex flex-wrap gap-4">
          {sizes.map((s) => (
            <div
              key={s.id}
              className="w-full sm:w-[48%] border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              {/* Size Input Field */}
              <label className="block text-gray-700 font-medium mb-1">
                Size
              </label>
              <input
                type="text"
                value={s.size}
                onChange={(e) => handleSizeChange(s.id, e.target.value)}
                className="w-full p-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter size (e.g., S, M, L, XL)"
              />
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Add More Sizes Button */}
          <button
            type="button"
            onClick={addSizeField}
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition shadow-md"
          >
            + Add More Size
          </button>

          {/* Final Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
          >
            Submit Sizes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSize;
