import { useState } from "react";
import toast from "react-hot-toast";

import { createShortUrl } from "../services/urlService";

function UrlFormCard({ onSuccess }) {


  const [originalUrl, setOriginalUrl] = useState("");

  const [customAlias, setCustomAlias] = useState("");

  const [expiryInDays, setExpiryInDays] = useState("");

  const [shortUrl, setShortUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  if (onSuccess) onSuccess();


  const handleShortenUrl = async () => {

    try {

      const token =
        localStorage.getItem("token");

      /*
       * Redirect to login
       * if user is not authenticated
       */
      if (!token) {

        toast.error(
          "Please login to create short links"
        );

        window.location.href = "/login";

        return;
      }

      setLoading(true);

      setErrorMessage("");

      setShortUrl("");

      const data = await createShortUrl({

        originalUrl,

        customAlias,

        expiryInDays:
          expiryInDays === ""
            ? null
            : Number(expiryInDays),

      });

      setShortUrl(data.shortUrl);

      toast.success(
        "Short URL created successfully!"
      );

    } catch (error) {

      console.error(error);

      setErrorMessage(error.message);

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        shortUrl
      );

      toast.success(
        "Copied to clipboard!"
      );

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

      <h2 className="text-3xl font-bold mb-2">
        Create Short URL
      </h2>

      <p className="text-gray-400 mb-8">
        Enter your long URL below
      </p>

      <div className="space-y-5">

        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Original URL
          </label>

          <input
            type="text"
            placeholder="https://example.com"
            value={originalUrl}
            onChange={(e) =>
              setOriginalUrl(
                e.target.value
              )
            }
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
          />

        </div>

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
                setCustomAlias(
                  e.target.value
                )
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
                setExpiryInDays(
                  e.target.value
                )
              }
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

          </div>

        </div>

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
                  rel="noopener noreferrer"
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

        {
          errorMessage && (

            <p className="text-red-400 text-sm">

              {errorMessage}

            </p>
          )
        }

      </div>

    </div>
  );
}

export default UrlFormCard;