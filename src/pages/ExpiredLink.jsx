import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ExpiredLink() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <section className="relative z-10 flex items-center justify-center px-6 py-20">

        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl text-center">

          <div className="text-7xl mb-6">
            ❌
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Link Expired
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            This short URL is no longer available.
            The link may have expired or been removed by its owner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Go Home
            </Link>

            <Link
              to="/dashboard"
              className="border border-white/10 px-8 py-3 rounded-2xl font-semibold hover:bg-white/5 transition"
            >
              Create Short Link
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ExpiredLink;