import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.response?.data?.message || "Login failed");
    }
  };



  return (
    <>
      <header className="bg-black w-full fixed top-0 left-0 z-50">
        <div className="flex items-center p-4">
          <img
            src="logoIcon.png"
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
          <span className="ml-4 text-lg font-semibold text-white">BudgetBuddy</span>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="relative">
          {/* Circle behind the box */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-56 h-56 rounded-full z-0 flex items-center justify-center"
          >
            <img
              src="logoIcon.png" // Add your image path here
              alt="Circle Image"
              className="w-32 h-32 object-cover rounded-full -mt-24"
            />
          </div>

          {/* White Box */}
          <div className="bg-white w-full max-w-2xl h-96 p-12 rounded-lg shadow-lg z-10 relative">
            <h1 className="text-green-500 text-4xl font-bold mb-2 text-center">Login</h1> {/* Green Login Text */}
            {/* Two Gray Boxes */}
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="bg-gray-200 w-96 h-20 rounded-lg shadow-md flex items-center p-4"> {/* Increased width */}
                <img
                  src="personIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4" // Adjust image size and margin
                />
                <input
                   type="text"
                   placeholder="Username"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-200 w-full h-full rounded-lg pl-1 outline-none text-black placeholder-black text-xl" // Updated className
                />
              </div>
              <div className="bg-gray-200 w-96 h-20 rounded-lg shadow-md flex items-center p-4"> {/* Increased width */}
                <img
                  src="passwordIcon.png" // Replace with your image path
                  alt="Image"
                  className="w-12 h-12 object-cover rounded-full mr-4" // Adjust image size and margin
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 w-full h-full rounded-lg pl-1 outline-none text-black placeholder-black text-xl" // Updated className
                />
              </div>
            </div>
            <div className="flex-1 flex justify-end"> 
              <span className="text-sm text-green-500 cursor-pointer">
                <Link to="/forgot">
                  <span className="text-green-500 cursor-pointer"> Forgot Username/Password?</span>
                </Link>
              </span>
            </div>
            <div className="flex justify-center mt-4"> {/* Center the button below the text */}
              <div className="bg-green-500 w-48 h-12 rounded-full flex items-center justify-center shadow-lg">
                <button
                  onClick={handleLogin}  
                  className="bg-green-500 w-48 h-12 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-lg font-semibold">Login</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center"> {/* Center the text */}
              <span className="text-sm text-gray-600">Don't have an account?
                <Link to="/signup">
                  <span className="text-green-500 cursor-pointer"> Join Now</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;