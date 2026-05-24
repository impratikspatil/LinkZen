import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import SkeletonCard from "./SkeletonCard";
import UrlFormCard from "./UrlFormCard";

import { getAllUrls } from "../services/urlService";

function HeroSection() {

  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expiryInDays, setExpiryInDays] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [pageLoading, setPageLoading] = useState(true);

  const [recentLinks, setRecentLinks] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {

    const timer = setTimeout(() => {

      setPageLoading(false);

    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    if (!token) return;

    const fetchUrls = async () => {

      try {

        const data = await getAllUrls();

        setRecentLinks(data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchUrls();

  }, [token]);

  const totalLinks = recentLinks.length;

  const totalClicks = recentLinks.reduce(
    (total, link) =>
      total + (link.clickCount || 0),
    0
  );

  const activeLinks = recentLinks.filter(
    (link) => !link.expired
  ).length;

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
            Authorization: `Bearer ${token}`,
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

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        shortUrl
      );

      toast.success("Copied to clipboard!");

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <section
      id="create-link"
      className="relative z-10 max-w-7xl mx-auto px-6 py-20"
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Create beautiful short links with custom aliases,
            analytics tracking, expiry support,
            and blazing fast redirects.
          </p>

          <div className="mt-12">

            {
              token ? (

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

                    <h2 className="text-4xl font-bold mb-2">
                      {totalLinks}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Your Links
                    </p>

                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

                    <h2 className="text-4xl font-bold mb-2">
                      {totalClicks}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Total Redirects
                    </p>

                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

                    <h2 className="text-4xl font-bold mb-2">
                      {activeLinks}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Active Links
                    </p>

                  </div>

                </div>

              ) : (

                <div className="grid grid-cols-3 gap-6 max-w-md">

                  <div className="text-center min-w-[120px]">

                    <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      10K+
                    </h2>

                    <p className="text-gray-400 mt-3 text-base">
                      Links Created
                    </p>

                  </div>

                  <div className="text-center min-w-[120px]">

                    <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      1M+
                    </h2>

                    <p className="text-gray-400 mt-3 text-base">
                      Redirects
                    </p>

                  </div>

                  <div className="text-center min-w-[120px]">

                    <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      99.9%
                    </h2>

                    <p className="text-gray-400 mt-3 text-base">
                      Reliable Uptime
                    </p>

                  </div>

                </div>
              )
            }

          </div>

        </div>

        {
          pageLoading ? (

            <SkeletonCard />

          ) : (

            <UrlFormCard
              originalUrl={originalUrl}
              setOriginalUrl={setOriginalUrl}
              customAlias={customAlias}
              setCustomAlias={setCustomAlias}
              expiryInDays={expiryInDays}
              setExpiryInDays={setExpiryInDays}
              shortUrl={shortUrl}
              loading={loading}
              errorMessage={errorMessage}
              handleShortenUrl={handleShortenUrl}
              handleCopy={handleCopy}
            />

          )
        }

      </div>

    </section>
  );
}

export default HeroSection;