import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import React from 'react'; // 👈 this is required

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <LoginForm />
      <button
        className="mt-4 text-blue-600 underline"
        onClick={() => navigate("/")}
      >
        Don’t have an account? Register
      </button>
    </div>
  );
}
