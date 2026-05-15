import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Architecture() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-20">

          <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6">
            System Design & Technical Overview
          </p>

          <h1 className="text-6xl font-bold mb-6">

            LinkZen
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Architecture
            </span>

          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A full-stack scalable URL shortener platform built using
            React, Spring Boot and MongoDB with analytics tracking,
            expiry links, custom aliases and production-ready architecture.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Frontend Stack
            </h2>

            <div className="space-y-5">

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  React + Vite
                </h3>

                <p className="text-gray-400">
                  Fast SPA frontend with reusable components
                  and optimized rendering.
                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  Tailwind CSS
                </h3>

                <p className="text-gray-400">
                  Modern utility-first responsive UI
                  with glassmorphism styling.
                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  React Router
                </h3>

                <p className="text-gray-400">
                  Client-side routing for multi-page SPA experience.
                </p>

              </div>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Backend Stack
            </h2>

            <div className="space-y-5">

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  Spring Boot
                </h3>

                <p className="text-gray-400">
                  REST API backend following layered architecture
                  with service and repository layers.
                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  MongoDB Atlas
                </h3>

                <p className="text-gray-400">
                  Cloud NoSQL database storing URLs,
                  analytics and click tracking data.
                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">
                  Global Exception Handling
                </h3>

                <p className="text-gray-400">
                  Centralized validation and custom exception management.
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-16">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Core Features Implemented
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Short URL Generation
              </h3>

              <p className="text-gray-400">
                Generate unique short URLs using random short codes.
              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Custom Aliases
              </h3>

              <p className="text-gray-400">
                Users can create personalized custom short links.
              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Expiry Support
              </h3>

              <p className="text-gray-400">
                Links can automatically expire after configured days.
              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Analytics Tracking
              </h3>

              <p className="text-gray-400">
                Track clicks, browser, IP address and referral source.
              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                Redirect System
              </h3>

              <p className="text-gray-400">
                Fast redirection to original URL using short codes.
              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">
                REST APIs
              </h3>

              <p className="text-gray-400">
                Fully RESTful APIs with DTO validation and clean responses.
              </p>

            </div>

          </div>

        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 rounded-3xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Deployment Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Frontend
              </h3>

              <p className="text-gray-400">
                Hosted on Vercel
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Backend
              </h3>

              <p className="text-gray-400">
                Hosted on Render
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">
                Database
              </h3>

              <p className="text-gray-400">
                MongoDB Atlas Cloud
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Architecture;