import { Link, useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import PasswordInput from "../../components/input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // Login API Call
    try {
      const response = await axiosInstance.post("/auth/login", {
        email: email,
        password: password,
      });

      // Handle successfull login
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="w-96 rounded-lg shadow h-auto p-10 bg-white relative overflow-hidden">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h2 className="text-2xl font-medium text-slate-700">Login</h2>
            <p className="text-slate-500">Enter emails below.</p>
          </div>
          <form className="w-full mt-4 space-y-3" onSubmit={handleLogin}>
            <div>
              <input
                className="input-box"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm capitalize">{error}</p>
              )}
            </div>
            <button
              className="w-full cursor-pointer justify-center py-3 text-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
              id="login"
              name="login"
              type="submit"
            >
              Login
            </button>
            <p className="flex justify-center space-x-1">
              <span className="text-slate-700">
                {" "}
                Don't have an account yet?{" "}
              </span>
              <Link className="text-blue-500 hover:underline" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
