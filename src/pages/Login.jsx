import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";

import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      toast.success(data.message);

      localStorage.setItem(
        "token",
        data.token
      );

        localStorage.setItem(
        "userEmail",
        email
        );

      window.location.href = "/";

    } catch (error) {

      console.error(error);

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <section className="relative z-10 flex items-center justify-center px-6 py-20">

        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl">

          <div className="text-center mb-10">

            <h1 className="text-5xl font-bold mb-4">
              Welcome Back
            </h1>

            <p className="text-gray-400">
              Login to manage your smart links
            </p>

          </div>

          <div className="space-y-6">

            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />

            </div>

            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />

            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-2xl font-semibold hover:opacity-90 transition disabled:opacity-50"
            >

              {
                loading
                  ? "Logging In..."
                  : "Login"
              }

            </button>

            <p className="text-center text-gray-400">

              Don't have an account?

              <Link
                to="/signup"
                className="text-blue-400 ml-2"
              >
                Signup
              </Link>

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;