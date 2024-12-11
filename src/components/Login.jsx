import { useState } from "react";
import investi from "../assets/investi.jpg";
import google from "../assets/google.png";
import logo from "../assets/logo2020.svg";

const DividerWithOr = () => {
  return (
    <div className="flex items-center justify-center ">
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
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex justify-center items-center">
        
        <div className="relative w-1/3  flex flex-col gap-3 py-20 border">
        <img className="absolute w-24 top-0" src={logo} />
          <form className="px-20 flex flex-col gap-5 py-4">
            <h1 className="text-center text-xl font-medium mb-4">
              Bienvenue à investi
            </h1>
            <input
              className=" block border px-4 py-[10px] w-full rounded-lg"
              type="email"
              value={email}
              placeholder="Entrer votre email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className=" block border px-4 py-[10px] w-full rounded-lg"
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
              vous n'avez pas un account ?{" "}
              <a className="text-green-500 cursor-pointer">Register</a>
            </h1>
            <DividerWithOr />

            <div className="flex flex-col items-center space-y-4">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md hover:bg-gray-100 w-80">
                <img
                  src={google}
                  alt="Google"
                  className="w-5 h-5 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Continue with Google
                </span>
              </button>
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
        <div className="w-2/3 border">
          <img src={investi} />
        </div>
      </div>
    </div>
  );
};

export default Login;
