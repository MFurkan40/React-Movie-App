import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { forgotPassword, signIn, signUpWithGoogle } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  return (
    <div className="flex justify-center">
      <div className="form-image hidden xl:block w-1/2 border-solid border-2 border-gray-800 shadow-lg">
        <img
          src="https://picsum.photos/800/800"
          alt="sample-movie"
          className="object-cover h-screen w-full"
        />
      </div>
      <div className="overflow-hidden flex-1 h-screen justify-center items-center mt-1  dark:bg-[#23242a]">
        <div
          className={`mt-[16vh] mx-auto overflow-hidden relative w-[380px] h-[600px] rounded-[8px] dark:bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
        >
          <form
            className="absolute inset-[2px] rounded-[8px] dark:bg-[#28292d] z-[10] form flex flex-col p-20"
            onSubmit={handleSubmit}
          >
            <h2 className="text-[#ff4b45] text-2xl font-[500] text-center tracking-[0.1em] mt-10">
              Sign In
            </h2>

            <div className="relative w-[300px] mt-[35px] inputbox">
              <input
                id="email"
                type="email"
                autoComplete="off"
                required
                className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#23242a] font-[1em] tracking-[0.05em]"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
                Email
              </span>
              <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[4px]"></i>
            </div>
            <div className="relative w-[300px] mt-[35px] inputbox">
              <input
                id="password"
                type="password"
                required
                className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#23242a] font-[1em] tracking-[0.05em]"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
                Password
              </span>
              <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[4px]"></i>
            </div>
            <div className="flex justify-between mt-2">
              <span
                role="button"
                className="links-a font-[0.75em] cursor-pointer text-[#8f8f8f] hover:text-[#ff4b45]"
                onClick={() => forgotPassword(email)}
              >
                Forgot Password
              </span>
              <Link
                className="links-a font-[0.75em]  cursor-pointer !text-[#8f8f8f]  hover:!text-[#ff4b45]"
                to="/register"
              >
                Sign Up
              </Link>
            </div>
            <input
              className="border-none outline-none bg-[#ff4b45] custom-input w-[125px] rounded-[4px] font-[600] cursor-pointer mt-24"
              type="submit"
              value="Login"
            />
            <button
              className="flex justify-between items-center border-none outline-none bg-[#ff4b45] custom-input w-[300px] mt-[15px] rounded-[4px] font-[600] cursor-pointer "
              type="button"
              onClick={handleGoogleProvider}
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
