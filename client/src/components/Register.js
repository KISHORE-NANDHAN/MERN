import React, { useState } from "react";
import axios from "axios"; // Import Axios
export default function Register() {
 const [formData, setForm] = useState({
 name: "",
 email: "",
 password: ""
 });
 const handleChange = (e) => {
 const { id, value } = e.target;
 setForm((prevFormData) => ({
 ...prevFormData,
 [id]: value
 }));
 };
 const handleSubmit = async (e) => {
 e.preventDefault(); // Prevent default form submission
 
 try {
 const response = await axios.post("http://localhost:3001/users/create", formData);
 console.log("Form data submitted successfully!", 
response.data);
 
 // Optionally, reset the form after submission
 setForm({
 name: "",
 email: "",
 password: ""
 });
 } catch (error) {
 console.error("Error submitting form:", error);
 // Handle error, e.g., show error message to user
 }
 };
 return (
 <form className="max-w-sm mx-auto py-5"
onSubmit={handleSubmit}>
 <div className="mb-5">
 <label htmlFor="name" className="block mb-2 textsm font-medium text-gray-900 dark:text-white">Your Name</label>
 <input
 type="text"
 id="name"
 className="bg-gray-50 border border-gray-300 
text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:borderblue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
dark:focus:border-blue-500"
 value={formData.name}
 onChange={handleChange}
 />
 </div>
 <div className="mb-5">
 <label htmlFor="email" className="block mb-2 textsm font-medium text-gray-900 dark:text-white">Your email</label>
 <input
 type="email"
 id="email"
 className="bg-gray-50 border border-gray-300 
text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:borderblue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
dark:focus:border-blue-500"
 placeholder="name@flowbite.com"
 required
value={formData.email}
 onChange={handleChange}
 />
 </div>
 <div className="mb-5">
 <label htmlFor="password" className="block mb-2 
text-sm font-medium text-gray-900 dark:text-white">Your password</
label>
 <input
 type="password"
 id="password"
 className="bg-gray-50 border border-gray-300 
text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:borderblue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
dark:focus:border-blue-500"
 value={formData.password}
 onChange={handleChange}
 required
 />
 </div>
 
 <button
 type="submit"
 className="text-white bg-blue-700 hover:bgblue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 fontmedium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
 >
 Submit
 </button>
 </form>
 );
}