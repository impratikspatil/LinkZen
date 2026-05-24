import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Architecture() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Hero Section */}

        <div className="text-center mb-24">

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

          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">

            A scalable URL shortener platform built using React,
            Spring Boot, Redis and MongoDB with JWT authentication,
            QR generation, analytics tracking, caching and production-ready architecture.

          </p>

        </div>

        {/* System Flow */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-16">

          <h2 className="text-4xl font-bold mb-10 text-center">

            High Level System Flow

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                React Frontend

              </h3>

              <p className="text-gray-400">

                User interface hosted on Vercel

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                Spring Boot APIs

              </h3>

              <p className="text-gray-400">

                REST APIs with JWT authentication

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                Redis Cache

              </h3>

              <p className="text-gray-400">

                Fast URL lookup and reduced DB load

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                MongoDB Atlas

              </h3>

              <p className="text-gray-400">

                Persistent storage for URLs and analytics

              </p>

            </div>

          </div>

        </div>

        {/* Frontend + Backend */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Frontend Architecture

            </h2>

            <div className="space-y-5">

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">

                  React + Vite

                </h3>

                <p className="text-gray-400">

                  Fast SPA frontend with reusable components and optimized rendering.

                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">

                  Tailwind CSS

                </h3>

                <p className="text-gray-400">

                  Modern responsive UI with glassmorphism design system.

                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">

                  Real-time Dashboard

                </h3>

                <p className="text-gray-400">

                  Dashboard auto-refreshes analytics using polling mechanism.

                </p>

              </div>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Backend Architecture

            </h2>

            <div className="space-y-5">

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">

                  Spring Boot

                </h3>

                <p className="text-gray-400">

                  Layered architecture using controller, service and repository pattern.

                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">

                  JWT Authentication

                </h3>

                <p className="text-gray-400">

                  Secure token-based authentication with Spring Security.

                </p>

              </div>

              <div className="bg-black/30 rounded-2xl p-5">

                <h3 className="text-xl font-semibold mb-2">

                  Redis Caching

                </h3>

                <p className="text-gray-400">

                  Frequently accessed short URLs cached for high performance redirects.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-16">

          <h2 className="text-4xl font-bold mb-10 text-center">

            Features Implemented

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                Short URL Generation

              </h3>

              <p className="text-gray-400">

                Random unique short code generation for URLs.

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                Custom Aliases

              </h3>

              <p className="text-gray-400">

                Users can create custom branded short URLs.

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                QR Code Generation

              </h3>

              <p className="text-gray-400">

                Generate and share QR codes for shortened links.

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                Analytics Tracking

              </h3>

              <p className="text-gray-400">

                Track clicks, user agent, IP address and referral source.

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                Expiry Management

              </h3>

              <p className="text-gray-400">

                Links support configurable expiry with edit functionality.

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-3">

                URL Management

              </h3>

              <p className="text-gray-400">

                Users can edit expiry, delete URLs and manage dashboard data.

              </p>

            </div>

          </div>

        </div>

        {/* Request Lifecycle */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-16">

          <h2 className="text-4xl font-bold mb-10 text-center">

            Redirect Request Lifecycle

          </h2>

          <div className="space-y-6">

            <div className="bg-black/30 rounded-2xl p-6">

              <p className="text-lg text-gray-300">

                1. User clicks the shortened URL

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <p className="text-lg text-gray-300">

                2. Spring Boot backend checks Redis cache

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <p className="text-lg text-gray-300">

                3. If cache miss occurs, MongoDB is queried

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <p className="text-lg text-gray-300">

                4. Analytics data gets stored in UrlClick collection

              </p>

            </div>

            <div className="bg-black/30 rounded-2xl p-6">

              <p className="text-lg text-gray-300">

                5. User is redirected to original destination URL

              </p>

            </div>

          </div>

        </div>

        {/* Deployment */}

        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10 rounded-3xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-10">

            Deployment Architecture

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div>

              <h3 className="text-2xl font-semibold mb-3">

                Frontend

              </h3>

              <p className="text-gray-400">

                Vercel Hosting

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">

                Backend

              </h3>

              <p className="text-gray-400">

                Render Deployment

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">

                Database

              </h3>

              <p className="text-gray-400">

                MongoDB Atlas

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-3">

                Cache Layer

              </h3>

              <p className="text-gray-400">

                Redis Cloud

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