// import React from "react";
// import { useFormik } from "formik";

// const Contact = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       message: "",
//       subject: "",
//       contactMethod: "",
//       terms: false,
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.name) errors.name = "Name is required";
//       if (!values.email) {
//         errors.email = "Email is required";
//       } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }
//       if (!values.message) errors.message = "Message is required";
//       if (!values.subject) errors.subject = "Subject is required";
//       if (!values.contactMethod)
//         errors.contactMethod = "Please select a contact method";
//       if (!values.terms) errors.terms = "You must accept the terms";
//       return errors;
//     },
//     onSubmit: (values, { resetForm }) => {
//       console.log("Form Submitted:", values);
//       resetForm(); // Reset the form to initial values
//     },
//   });

//   return (
//     <div className=" bg-blue-300 p-6 sm:p-8 md:p-12 mb-10 lg:p-16 xl:p-20 max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full mx-auto mt-10 text-black rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">

//       <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
//         Contact Us
//       </h2>
//       <form onSubmit={formik.handleSubmit} className="space-y-6">
//         {/* Name Field */}
//         <div className="flex flex-col">
//           <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-white">
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//             className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
//           />
//           {formik.touched.name && formik.errors.name && (
//             <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
//           )}
//         </div>

//         {/* Email Field */}
//         <div className="flex flex-col">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-white">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//             className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
//           )}
//         </div>

//         {/* Subject Field */}
//         <div className="flex flex-col">
//           <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-white">
//             Subject
//           </label>
//           <select
//             id="subject"
//             name="subject"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.subject}
//             className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
//           >
//             <option value="" label="Select a subject" />
//             <option value="general" label="General Inquiry" />
//             <option value="support" label="Support" />
//             <option value="feedback" label="Feedback" />
//           </select>
//           {formik.touched.subject && formik.errors.subject && (
//             <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
//           )}
//         </div>

//         {/* Contact Method Radio Buttons */}
//         <div className="flex flex-col">
//           <label className="text-sm font-medium text-gray-700 dark:text-white">
//             Preferred Contact Method
//           </label>
//           <div className="flex space-x-6">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 checked={formik.values.contactMethod === "email"}
//                 className="mr-2"
//               />
//               <span>Email</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="phone"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 checked={formik.values.contactMethod === "phone"}
//                 className="mr-2"
//               />
//               <span>Phone</span>
//             </label>
//           </div>
//           {formik.touched.contactMethod && formik.errors.contactMethod && (
//             <div className="text-red-500 text-sm mt-1">{formik.errors.contactMethod}</div>
//           )}
//         </div>

//         {/* Terms Checkbox */}
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             name="terms"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             checked={formik.values.terms}
//             className="mr-2"
//           />
//           <span>
//             I agree to the{" "}
//             <a href="#" className="text-blue-500">terms and conditions</a>
//           </span>
//         </div>
//         {formik.touched.terms && formik.errors.terms && (
//           <div className="text-red-500 text-sm mt-1">{formik.errors.terms}</div>
//         )}

//         {/* Message Field */}
//         <div className="flex flex-col">
//           <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-white">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.message}
//             className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
//           ></textarea>
//           {formik.touched.message && formik.errors.message && (
//             <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
// // max-w-sm: Restricts the maximum width to 24rem (384px) on screens smaller than 600px



// // max-w-[90%]:

// // Ensures the form takes up at most 90% of the screen width for very small screens.
// // It prevents the form from becoming too wide on small devices
// // On very small screens (< 640px):
// // The form will take up 90% of the screen width with equal space on both sides.
