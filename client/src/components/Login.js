import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setForm] = useState({
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
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users/login", formData);
      console.log("Login successful!", response.data);
      alert("Login successful!"); // You may want to handle this more elegantly
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials."); // Handle error messages
    }
  };

  return (
    <form className="max-w-sm mx-auto py-5" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="name@flowbite.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="button-primary"
      >
        Login
      </button>
    </form>
  );
}
