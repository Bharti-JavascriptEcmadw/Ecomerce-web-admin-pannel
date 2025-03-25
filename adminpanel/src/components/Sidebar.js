  // import React from 'react';
  // import { Link } from 'react-router-dom';
  // import { FaHome, FaInfoCircle, FaEnvelope, FaTimes } from 'react-icons/fa'; // Import Font Awesome Icons

  // const Sidebar = ({ isSidebarOpen, toggleSidebar, closeSidebar }) => {
  //   return (
  //     <>
  //         {/* Overlay for the rest of the body */}
  //      {isSidebarOpen && (
  //         <div
  //           className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
  //           onClick={toggleSidebar} // Close sidebar when clicking outside
  //         ></div>
  //       )}
  //       {/* Sidebar Container */}
  //       <div
  //      className={`fixed top-0 left-0 h-screen w-64 bg-red-500 lg:bg-gray-900 text-white p-4 dark:bg-black z-[999] 
  //       ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
  //       >

  // <button
  //           className="absolute top-4 right-4 text-white text-xl lg:hidden"
  //           onClick={toggleSidebar}
  //         >
  //           <FaTimes />
  //         </button>

  //         {/* Logo Section */}
  //         <div className="flex items-center justify-center h-14 border-b border-gray-700 mb-3">
  //           <h1 className="text-xl font-bold">Logo</h1>
  //         </div>

  //         {/* Navigation Links */}
  //         <ul className="space-y-4">
  //           <li>
  //             <Link
  //               to="/"
  //               className="flex items-center p-3 hover:bg-blue-500 dark:hover:bg-gray-600 rounded"
  //             >
  //               <FaHome className="mr-3" /> {/* Home Icon */}
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to="/about"
  //               className="flex items-center p-3 hover:bg-blue-500 dark:hover:bg-gray-600 rounded"
  //             >
  //               <FaInfoCircle className="mr-3" /> {/* About Icon */}
  //               About
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to="/contact"
  //               className="flex items-center p-3 hover:bg-blue-500 dark:hover:bg-gray-600 rounded"
  //             >
  //               <FaEnvelope className="mr-3" /> {/* Contact Icon */}
  //               Contact
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </>
  //   );
  // };

  // export default Sidebar;


  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import { 
    FaTachometerAlt, FaPalette, FaUserCog, FaTags, FaShoppingCart, 
    FaBoxOpen, FaFileAlt, FaClipboardList, FaSlidersH, FaGavel, 
    FaBars, FaChevronDown, FaChevronRight, FaSignOutAlt, FaRulerCombined
  } from "react-icons/fa";

  const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (category) => {
      setOpenDropdown(openDropdown === category ? null : category);
    };

    return (
      <>
        {/* Overlay for mobile */}
        {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>}

        {/* Sidebar (Fixed Position) */}
        <div className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col z-50 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
          
          {/* Logo */}
          <div className="flex items-center justify-center h-14 border-b border-gray-700">
            <h1 className="text-lg font-semibold">Frank and Oak</h1>
          </div>

          {/* Sidebar Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
            <ul className="space-y-2 text-[15px]"> 
              <li><Link to="/" className="flex items-center p-3 hover:bg-gray-700 rounded"><FaTachometerAlt className="mr-2" />Dashboard</Link></li>

              {/* Colors */}
              <li>
                <button onClick={() => handleDropdownToggle("colors")} className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded">
                  <div className="flex items-center"><FaPalette className="mr-2" /> Colors</div>
                  {openDropdown === "colors" ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                {openDropdown === "colors" && (
                  <ul className="ml-5 space-y-1">
                    <li><Link to="/colors/add" className="block p-2 hover:bg-gray-700 rounded">Add Color</Link></li>
                    <li><Link to="/colors/view" className="block p-2 hover:bg-gray-700 rounded">View Colors</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/profile" className="flex items-center p-3 hover:bg-gray-700 rounded"><FaUserCog className="mr-2" />Profile</Link></li>

              {/* Divider */}
              <div className="uppercase text-[12px] text-gray-500 px-3 mt-2">Ecommerce Components</div>

              {/* Parent Category */}
              <li>
                <button onClick={() => handleDropdownToggle("parentCategory")} className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded">
                  <div className="flex items-center"><FaTags className="mr-2" /> Parent Category</div>
                  {openDropdown === "parentCategory" ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                {openDropdown === "parentCategory" && (
                  <ul className="ml-5 space-y-1">
                    <li><Link to="/parent-category/add" className="block p-2 hover:bg-gray-700 rounded">Add Category</Link></li>
                    <li><Link to="/parent-category/view" className="block p-2 hover:bg-gray-700 rounded">View Categories</Link></li>
                  </ul>
                )}
              </li>

              {/* Product Category */}
              <li>
                <button onClick={() => handleDropdownToggle("productCategory")} className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded">
                  <div className="flex items-center"><FaShoppingCart className="mr-2" /> Product Category</div>
                  {openDropdown === "productCategory" ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                {openDropdown === "productCategory" && (
                  <ul className="ml-5 space-y-1">
                    <li><Link to="/product-category/add" className="block p-2 hover:bg-gray-700 rounded">Add Product</Link></li>
                    <li><Link to="/product-category/view" className="block p-2 hover:bg-gray-700 rounded">View Products</Link></li>
                  </ul>
                )}
              </li>

              {/* Product */}
              <li>
                <button onClick={() => handleDropdownToggle("product")} className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded">
                  <div className="flex items-center"><FaBoxOpen className="mr-2" /> Product</div>
                  {openDropdown === "product" ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                {openDropdown === "product" && (
                  <ul className="ml-5 space-y-1">
                    <li><Link to="/product/details" className="block p-2 hover:bg-gray-700 rounded">Product Details</Link></li>
                  </ul>
                )}
              </li>

              {/* Size Category */}
              <li>
                <button onClick={() => handleDropdownToggle("sizeCategory")} className="w-full flex items-center justify-between p-3 hover:bg-gray-700 rounded">
                  <div className="flex items-center"><FaRulerCombined className="mr-2" /> Size</div>
                  {openDropdown === "sizeCategory" ? <FaChevronDown /> : <FaChevronRight />}
                </button>
                {openDropdown === "sizeCategory" && (
                  <ul className="ml-5 space-y-1">
                    <li><Link to="/size/add" className="block p-2 hover:bg-gray-700 rounded">Add Size</Link></li>
                    <li><Link to="/size/view" className="block p-2 hover:bg-gray-700 rounded">View Sizes</Link></li>
                  </ul>
                )}
              </li>

              {/* New Sections */}
              <li><Link to="/story" className="flex items-center p-3 hover:bg-gray-700 rounded"><FaFileAlt className="mr-2" />Story</Link></li>
              <li><Link to="/order" className="flex items-center p-3 hover:bg-gray-700 rounded"><FaClipboardList className="mr-2" />Order</Link></li>
              <li><Link to="/slider" className="flex items-center p-3 hover:bg-gray-700 rounded"><FaSlidersH className="mr-2" />Slider</Link></li>
              <li><Link to="/terms" className="flex items-center p-3 hover:bg-gray-700 rounded"><FaGavel className="mr-2" />Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Footer (Fixed at Bottom) */}
          <div className="h-14 flex items-center justify-center border-t border-gray-700">
            <button className="w-full flex items-center justify-center p-3 text-red-400 hover:text-red-600">
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </>
    );
  };

  export default Sidebar;

