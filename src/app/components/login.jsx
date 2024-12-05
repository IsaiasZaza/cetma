"use client";

import React, { useState } from "react";
// Importando os ícones do react-icons
import { FiUser } from "react-icons/fi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-center flex justify-end items-center px-24"
      style={{
        backgroundImage: `url(/banner-teste.jpg)`,
      }}
    >
      <div className="bg-white p-14 rounded-lg shadow-lg w-[500px] text-center mb-28">
        <h3 className="text-4xl font-bold mb-8 text-blue-500">Login</h3>
        <img
          src="./src/images/cefas.png"
          alt="CETMA"
          className="w-48 mx-auto mb-8"
        />

        <form>
          {/* Campo de Email */}
          <div className="relative mb-10">
            <input
              type="text"
              id="username"
              name="username"
              required
              className="peer w-full border-b-2 border-gray-400 bg-transparent outline-none focus:border-blue-400 px-4 py-4 text-gray-800 pr-12 text-lg focus:ring-0"
            />
            <label
              htmlFor="username"
              className="absolute left-4 top-3 text-gray-500 text-lg transition-all pointer-events-none transform duration-200 ease-in-out scale-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-blue-500"
            >
              Email
            </label>
            <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl" />
          </div>

          {/* Campo de Senha */}
          <div className="relative mb-10">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              className="peer w-full border-b-2 border-gray-400 bg-transparent outline-none focus:border-blue-400 px-4 py-4 text-gray-800 pr-12 text-lg focus:ring-0"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-500 text-lg transition-all pointer-events-none transform duration-200 ease-in-out scale-100 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-blue-500"
            >
              Senha
            </label>
            {/* Ícone de mostrar/ocultar senha */}
            {showPassword ? (
              <AiFillEyeInvisible
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
              />
            ) : (
              <AiFillEye
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 text-xl cursor-pointer"
              />
            )}
          </div>

          {/* Botão de Login */}
          <button
            type="button"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-lg font-bold mt-6 text-xl hover:scale-105 transform transition-all duration-300"
          >
            LOGIN
          </button>

          {/* Links de ação */}
          <p className="text-gray-500 text-lg mt-8">
            Don’t have an account?{" "}
            <a
              href="src/html/register.html"
              className="text-gray-800 hover:text-blue-600 transition-all"
            >
              Sign Up
            </a>
          </p>
          <a
              href="src/html/forgot-password.html"
              className="text-blue-600 hover:underline transition-all mt-2 block text-lg"
            >
              Forgot your password?
            </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
