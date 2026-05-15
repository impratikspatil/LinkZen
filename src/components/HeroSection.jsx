import { useState, useEffect} from "react";
import toast from "react-hot-toast";
import SkeletonCard from "./SkeletonCard";
import UrlFormCard from "./UrlFormCard";

function HeroSection() {

  const [originalUrl, setOriginalUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [expiryInDays, setExpiryInDays] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageLoading, setPageLoading] = useState(true);


    useEffect(() => {

  const timer = setTimeout(() => {

    setPageLoading(false);

  }, 2000);

  return () => clearTimeout(timer);

}, []);

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
            className="relative z-10 max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

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

        {
            pageLoading ? (
                <SkeletonCard />
            ):
            (
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