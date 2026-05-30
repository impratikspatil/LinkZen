import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  MousePointerClick,
  CalendarDays,
  Globe,
  ExternalLink,
} from "lucide-react";

import {getUrlAnalytics} from "../services/urlService";

function UrlAnalyticsPage() {

  const { shortCode } = useParams();

  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchStats = async () => {

      try {

        const data =
          await getUrlAnalytics(shortCode);

        setStats(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

    fetchStats();

  }, [shortCode]);

  if (loading) {

    return (

      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">

        Loading Analytics...

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        <div className="mb-14">

          <p className="text-gray-400 mb-3">
            Detailed URL Analytics
          </p>

          <h1 className="text-5xl font-bold mb-4">

            {stats.shortCode}

          </h1>

          <a
            href={`https://linkzen-backend-2.onrender.com/${stats.shortCode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
          >

            Open Short URL

            <ExternalLink size={18} />

          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                Total Clicks
              </p>

              <MousePointerClick size={24} />

            </div>

            <h2 className="text-5xl font-bold">

              {stats.clickCount}

            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                Created Date
              </p>

              <CalendarDays size={24} />

            </div>

            <h2 className="text-2xl font-bold">

              {
                new Date(
                  stats.createdAt
                ).toLocaleDateString()
              }

            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                Status
              </p>

              <Globe size={24} />

            </div>

            <h2 className="text-3xl font-bold text-green-400">

              Active

            </h2>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            URL Information
          </h2>

          <div className="space-y-8">

            <div>

              <p className="text-gray-400 mb-3">
                Original URL
              </p>

              <div className="bg-black/30 rounded-2xl p-5 break-all">

                {stats.originalUrl}

              </div>

            </div>

            <div>

              <p className="text-gray-400 mb-3">
                Short URL
              </p>

              <div className="bg-black/30 rounded-2xl p-5 break-all">

                https://linkzen-backend-2.onrender.com/
                {stats.shortCode}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default UrlAnalyticsPage;