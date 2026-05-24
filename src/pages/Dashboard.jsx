import { useEffect, useState } from "react";
import { getAllUrls } from "../services/urlService";

function Dashboard() {

  const [recentLinks, setRecentLinks] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

  const fetchUrls = async () => {

    try {

      const data = await getAllUrls();

      setRecentLinks(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  fetchUrls();

}, []);

if (loading) {

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">

      Loading Dashboard...

    </div>
  );
}

  const totalTraffic = recentLinks.reduce(
  (total, link) =>
    total + (link.clickCount || 0),
  0
);

const directTraffic = Math.round(
  totalTraffic * 0.7
);

const socialTraffic = Math.round(
  totalTraffic * 0.2
);

const searchTraffic =
  totalTraffic -
  directTraffic -
  socialTraffic;

const directPercentage =
  totalTraffic === 0
    ? 0
    : Math.round(
        (directTraffic / totalTraffic) * 100
      );

const socialPercentage =
  totalTraffic === 0
    ? 0
    : Math.round(
        (socialTraffic / totalTraffic) * 100
      );

const searchPercentage =
  totalTraffic === 0
    ? 0
    : Math.round(
        (searchTraffic / totalTraffic) * 100
      );

  return (

      <div className="relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* <Navbar /> */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">

          <div>

            <p className="text-gray-400 mb-3">
              Welcome Back 👋
            </p>

            <h1 className="text-5xl font-bold">
              Analytics Dashboard
            </h1>

          </div>

            <button
                onClick={() => {

                    document
                    .getElementById("create-link")
                    ?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                className="mt-6 md:mt-0 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                >

                Create New Link

                </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-400 mb-3">
              Total Links
            </p>

            <h2 className="text-5xl font-bold">
              {recentLinks.length}
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-400 mb-3">
              Total Clicks
            </p>

            <h2 className="text-5xl font-bold">
              {
                recentLinks.reduce(
                    (total, link) =>
                    total + (link.clickCount || 0),
                    0
                )
                }
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-400 mb-3">
              Active Links
            </p>

            <h2 className="text-5xl font-bold">
              {
                recentLinks.filter(
                    (link) => !link.expired
                ).length
                }
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <p className="text-gray-400 mb-3">
              Expired Links
            </p>

            <h2 className="text-5xl font-bold">
              {
                recentLinks.filter(
                    (link) => link.expired
                ).length
                }
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">

          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-3xl font-bold mb-2">
                  Recent URLs
                </h2>

                <p className="text-gray-400">
                  Manage and track your generated links
                </p>

              </div>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="border-b border-white/10">

                  <tr className="text-left">

                    <th className="pb-5">
                      Short URL
                    </th>

                    <th className="pb-5">
                      Original URL
                    </th>

                    <th className="pb-5">
                      Clicks
                    </th>

                    <th className="pb-5">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {
  recentLinks.length === 0 ? (

    <tr>

      <td
        colSpan="4"
        className="py-10 text-center text-gray-400"
      >
        No URLs Created Yet
      </td>

    </tr>

  ) : (

    recentLinks.map((link, index) => (

      <tr
        key={index}
        className="border-b border-white/5"
      >

        <td className="py-5">

          <a
            href={`https://linkzen-backend-2.onrender.com/${link.shortCode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {link.shortCode}
          </a>

        </td>

        <td className="py-5 text-gray-400 max-w-[250px] truncate">
          {link.originalUrl}
        </td>

        <td className="py-5">
          {link.clickCount || 0}
        </td>

        <td className="py-5">

          <span
            className={
              link.expired
                ? "text-yellow-400"
                : "text-green-400"
            }
          >

            {
              link.expired
                ? "Expired"
                : "Active"
            }

          </span>

        </td>

      </tr>
    ))
  )
}

                </tbody>

              </table>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

  <h2 className="text-3xl font-bold mb-6">
    Traffic Sources
  </h2>

  <div className="space-y-6">

    <div>

      <div className="flex items-center justify-between mb-2">

        <p className="text-gray-300">
          Direct
        </p>

        <p className="text-gray-400">
          {directPercentage}%
        </p>

      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

        <div
          style={{
            width: `${directPercentage}%`,
          }}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        ></div>

      </div>

    </div>

    <div>

      <div className="flex items-center justify-between mb-2">

        <p className="text-gray-300">
          Social Media
        </p>

        <p className="text-gray-400">
          {socialPercentage}%
        </p>

      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

        <div
          style={{
            width: `${socialPercentage}%`,
          }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
        ></div>

      </div>

    </div>

    <div>

      <div className="flex items-center justify-between mb-2">

        <p className="text-gray-300">
          Search
        </p>

        <p className="text-gray-400">
          {searchPercentage}%
        </p>

      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

        <div
          style={{
            width: `${searchPercentage}%`,
          }}
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
        ></div>

      </div>

    </div>

  </div>

</div>

        </div>

      </section>

      </div>

  );
}

export default Dashboard;