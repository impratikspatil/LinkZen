import { useState } from "react";

function App() {

  const [originalUrl, setOriginalUrl] = useState("");

  const [customAlias, setCustomAlias] = useState("");

  const [expiryInDays, setExpiryInDays] = useState("");

  const [shortUrl, setShortUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  /*
   * Calls backend API
   * to generate short URL.
   */
  const handleShortenUrl = async () => {

    try {

      setLoading(true);

      setErrorMessage("");

      setShortUrl("");

      const response = await fetch(
        "https://linkzen-backend-2.onrender.com/api/v1/url/shorten",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            originalUrl,
            customAlias,
            expiryInDays:
              expiryInDays === ""
                ? null
                : Number(expiryInDays),
          }),
        }
      );

      const data = await response.json();

      /*
       * Handle backend validation errors.
       */
      if (!response.ok) {

        const firstError =
          Object.values(data)[0];

        setErrorMessage(firstError);

        return;
      }

      setShortUrl(data.shortUrl);

    } catch (error) {

      console.error(error);

      setErrorMessage(
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  /*
   * Copies generated short URL.
   */
  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        shortUrl
      );

      alert("Copied to clipboard!");

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">

        <h1 className="text-2xl font-bold tracking-wide">
          LinkZen
        </h1>

              {/* <a
              href="https://github.com/your-username/url-shortener"
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              GitHub
      </a> */}

      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6">
              Analytics Powered URL Shortener
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">

              Transform URLs
              <br />

              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Into Smart Links
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Create beautiful short links with custom aliases,
              analytics tracking, expiry support,
              and blazing fast redirects.
            </p>

            {/* Analytics Cards */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-bold mb-2">
                  10K+
                </h2>

                <p className="text-gray-400 text-sm">
                  Links Generated
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-bold mb-2">
                  1M+
                </h2>

                <p className="text-gray-400 text-sm">
                  Redirects
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-bold mb-2">
                  99.9%
                </h2>

                <p className="text-gray-400 text-sm">
                  Uptime
                </p>

              </div>

            </div>

          </div>

          {/* Right Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-2">
              Create Short URL
            </h2>

            <p className="text-gray-400 mb-8">
              Enter your long URL below
            </p>

            <div className="space-y-5">

              {/* Original URL */}
              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Original URL
                </label>

                <input
                  type="text"
                  placeholder="https://example.com"
                  value={originalUrl}
                  onChange={(e) =>
                    setOriginalUrl(e.target.value)
                  }
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                />

              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Custom Alias
                  </label>

                  <input
                    type="text"
                    placeholder="my-link"
                    value={customAlias}
                    onChange={(e) =>
                      setCustomAlias(e.target.value)
                    }
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                  />

                </div>

                <div>

                  <label className="block text-sm text-gray-300 mb-2">
                    Expiry Days
                  </label>

                  <input
                    type="number"
                    placeholder="7"
                    value={expiryInDays}
                    onChange={(e) =>
                      setExpiryInDays(e.target.value)
                    }
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
                  />

                </div>

              </div>

              {/* Error Message */}
              {
                errorMessage && (

                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl p-4">

                    {errorMessage}

                  </div>
                )
              }

              {/* Button */}
              <button
                onClick={(e) => {

                  e.preventDefault();

                  handleShortenUrl();
                }}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-2xl font-semibold hover:opacity-90 transition disabled:opacity-50"
              >

                {
                  loading
                    ? "Generating..."
                    : "Generate Short URL"
                }

              </button>

              {/* Result */}
              {
                shortUrl && (

                  <div className="bg-black/30 border border-white/10 rounded-2xl p-5 mt-6">

                    <p className="text-sm text-gray-400 mb-3">
                      Generated URL
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">

                      <a
                        href={shortUrl}
                        target="_blank"
                        className="text-blue-400 break-all"
                      >
                        {shortUrl}
                      </a>

                      <button
                        onClick={handleCopy}
                        className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition"
                      >
                        Copy
                      </button>

                    </div>

                  </div>
                )
              }

            </div>

          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold mb-4">
            Powerful Features
          </h2>

          <p className="text-gray-400 text-lg">
            Everything you need in a modern URL shortener
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Custom Aliases
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Create personalized and branded short URLs
              for marketing campaigns and sharing.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Advanced Analytics
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Track clicks, browsers, IP addresses,
              and traffic sources in real time.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Expiry Links
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Generate temporary links with expiry
              dates for secure sharing.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">

        Built with React, Spring Boot & MongoDB

      </footer>

    </div>
  );
}

export default App;