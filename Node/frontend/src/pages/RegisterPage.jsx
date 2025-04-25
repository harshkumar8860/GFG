import RegisterForm from "../components/RegistrationForm";
import { useNavigate } from "react-router-dom";
import React from 'react'; // 👈 this is required

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <RegisterForm />
      <button
        className="mt-4 text-blue-600 underline"
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </button>
    </div>
  );
}
