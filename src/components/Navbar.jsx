import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">

      <Link
        to="/"
        className="text-3xl font-bold tracking-wide"
      >
        LinkZen
      </Link>

      <div className="flex items-center gap-4">

        <Link
          to="/architecture"
          className="text-gray-300 hover:text-white transition"
        >
          Architecture
        </Link>

        <Link
          to="/login"
          className="text-gray-300 hover:text-white transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Signup
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;