// import { useState } from "react";
// import axios from "axios";
// import React from 'react'; // 👈 this is required

// export default function LoginForm() {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", formData);
//       setMessage(res.data.message);
//       localStorage.setItem("token", res.data.token);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-sm bg-white p-6 rounded shadow-md space-y-4">
//       <h2 className="text-xl font-bold">Login</h2>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         onChange={handleChange}
//         value={formData.username}
//         className="w-full px-3 py-2 border rounded"
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         value={formData.password}
//         className="w-full px-3 py-2 border rounded"
//       />
//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//         Login
//       </button>
//       {message && <p className="text-gray-600 text-sm">{message}</p>}
//     </form>
//   );
// }





import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validations/validationSchema";
import axios from "axios";
import React from 'react';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data);
      alert("Login successful");
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            alert(err.response.data.message); // Show 'Invalid credentials' etc.
          } else {
            alert("Invalid Credentials");
          }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <input
        {...register("email")}
        placeholder="Email"
        className="w-full border p-2 rounded mb-2"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded mb-2"
      />
      {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
