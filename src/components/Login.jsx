import { useState } from "react";
import loginImage from "../assets/loginimage.jpg";
import google from "../assets/google.png";

const DividerWithOr = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-3 text-gray-500">or</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Background Image Section */}
      <div
        className="flex-grow flex justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better contrast */}

        {/* Login Form */}
        <div className="relative z-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-8 rounded-lg shadow-lg border">
          <form className="flex flex-col gap-5">
            <h1 className="text-center text-xl font-medium mb-4">
              Bienvenue à investi
            </h1>
            <input
              className="block border px-4 py-[10px] w-full rounded-lg"
              type="email"
              value={email}
              placeholder="Entrer votre email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block border px-4 py-[10px] w-full rounded-lg"
              type="password"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="px-4 py-[7px] text-white bg-blue-600 rounded hover:bg-blue-700 w-full"
              type="submit"
            >
              Continue
            </button>
            <h1 className="text-center text-sm">
              vous n'avez pas de compte ?{" "}
              <a className="text-green-500 cursor-pointer">S'inscrire</a>
            </h1>
            <DividerWithOr />

            {/* Social Media Buttons */}
            <div className="flex flex-col items-center space-y-4">
              {/* Google Button */}
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md hover:bg-gray-100 w-80">
                <img src={google} alt="Google" className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Continue with Google
                </span>
              </button>

              {/* Apple Button */}
              <button className="flex items-center px-4 py-2 bg-gray-500 border border-gray-300 rounded-lg shadow hover:shadow-md hover:bg-gray-800 w-80">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-5 h-5 mr-3"
                />
                <span className="text-sm font-medium text-white">
                  Continue with Apple
                </span>
              </button>

              {/* Facebook Button */}
              <button className="flex items-center px-4 py-2 bg-blue-600 border border-blue-700 rounded-lg shadow hover:shadow-md hover:bg-blue-700 w-80">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-3"
                />
                <span className="text-sm font-medium text-white">
                  Continue with Facebook
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
