import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const isLoggedIn = !!token;
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (

    <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">

      <Link to="/" className="text-3xl font-bold tracking-wide">
        LinkZen
      </Link>

      <div className="flex items-center gap-10">

        <Link to="/architecture" className="text-gray-300 hover:text-white transition">
          Architecture
        </Link>

        <a
          href="https://linkzen-backend-2.onrender.com/swagger-ui/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          API Docs
        </a>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition">
              Dashboard
            </Link>

            <Link to="/analytics" className="text-gray-300 hover:text-white transition">
              Analytics
            </Link>

            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">
              {userEmail.charAt(0).toUpperCase()}
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-300 hover:text-white transition">
              Login
            </Link>
            <Link to="/signup" className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition">
              Signup
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;