import { useEffect, useState } from "react";
import {
  getAllUrls,
  deleteUrl,
  updateExpiry,
} from "../services/urlService";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import toast from "react-hot-toast";

function Dashboard() {

  const [recentLinks, setRecentLinks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [selectedLink, setSelectedLink] =
    useState(null);

  const [showEditModal, setShowEditModal] =
    useState(false);

  const [expiryDays, setExpiryDays] =
    useState("");

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

  const interval = setInterval(() => {

    fetchUrls();

  }, 5000);

  return () => clearInterval(interval);

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
      
  const handleDeleteUrl = async () => {

  try {

    await deleteUrl(
      selectedLink.shortCode
    );

    setRecentLinks((prev) =>
      prev.filter(
        (link) =>
          link.shortCode !==
          selectedLink.shortCode
      )
    );

    setShowDeleteModal(false);

    toast.success(
      "URL deleted successfully"
    );

  } catch (error) {

    console.error(error);

    toast.error(error.message);
  }
};

const handleUpdateExpiry = async () => {

  if (!expiryDays || Number(expiryDays) <= 0) {

  toast.error(
    "Expiry days must be greater than 0"
  );

  return;
}

  try {

    const updatedUrl =
      await updateExpiry(
        selectedLink.shortCode,
        Number(expiryDays)
      );

    setRecentLinks((prev) =>
      prev.map((link) =>

        link.shortCode ===
        updatedUrl.shortCode

          ? updatedUrl
          : link
      )
    );

    setShowEditModal(false);

    toast.success(
      "Expiry updated successfully"
    );

  } catch (error) {

    console.error(error);

    toast.error(error.message);
  }
};

  return (

    <div className="relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

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

        <div className="flex flex-col gap-8 mb-14">

          {/* Recent URLs Section */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

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
                      Expires In
                    </th>

                    <th className="pb-5">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {
                    recentLinks.length === 0 ? (

                      <tr>

                        <td
                          colSpan="5"
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

                          <td className="py-5 w-[100px]">

                            <a
                              href={`https://linkzen-backend-2.onrender.com/${link.shortCode}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              {link.shortCode}
                            </a>

                          </td>

                          <td className="py-5 max-w-[320px]">

                            <div className="truncate text-gray-400 w-[320px]">
                              {link.originalUrl}
                            </div>

                          </td>

                          <td className="py-5 w-[100px]">
                            {link.clickCount || 0}
                          </td>

                          <td className="py-5 w-[140px]">

                            {

                              link.expiresAt ? (

                                (() => {

                                  const expiryDate =
                                    new Date(link.expiresAt);

                                  const currentDate =
                                    new Date();

                                  const diffTime =
                                    expiryDate - currentDate;

                                  const diffDays =
                                    Math.ceil(
                                      diffTime /
                                      (1000 * 60 * 60 * 24)
                                    );

                                  return diffDays > 0 ? (

                                    <span className="text-green-400">

                                      {diffDays} days

                                    </span>

                                  ) : (

                                    <span className="text-red-400">

                                      Expired

                                    </span>

                                  );
                                })()

                              ) : (

                                <span className="text-gray-400">

                                  Never

                                </span>
                              )
                            }

                          </td>

                          <td className="py-5 w-[100px]">

                            <div className="flex items-center gap-4">

                              <button
                                title="Edit Expiry"
                                className="text-blue-400 hover:text-blue-300 transition cursor-pointer"
                                onClick={() => {

                                  setSelectedLink(link);

                                  setExpiryDays("");

                                  setShowEditModal(true);
                                }}
                              >

                                <Pencil size={18} />

                              </button>

                              <button
                                className="cursor-pointer"
                                onClick={() => {

                                  setSelectedLink(link);

                                  setShowDeleteModal(true);
                                }}
                              >

                                <Trash2 className="w-5 h-5 text-red-400 hover:text-red-300" />

                              </button>

                            </div>

                          </td>

                        </tr>
                      ))
                    )
                  }

                </tbody>

              </table>

            </div>

          </div>

          {/* Traffic Sources Section */}

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

      {
        showDeleteModal && (

          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 w-[90%] max-w-md">

              <h2 className="text-2xl font-bold mb-4">
                Delete Link
              </h2>

              <p className="text-gray-400 mb-8">

                Are you sure you want to delete

                <span className="text-white font-semibold">

                  {" "} {selectedLink?.shortCode}

                </span>

                ?

              </p>

              <div className="flex justify-end gap-4">

                <button
                  onClick={() =>
                    setShowDeleteModal(false)
                  }
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition font-semibold cursor-pointer"
                >

                  Cancel

                </button>

                <button
                    onClick={handleDeleteUrl}
                    className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold cursor-pointer"
                  >

                    Delete

                  </button>

              </div>

            </div>

          </div>
        )
      }

      {
        showEditModal && (

          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 w-[90%] max-w-md">

              <h2 className="text-2xl font-bold mb-4">
                Edit Expiry
              </h2>

              <p className="text-gray-400 mb-6">

                Update expiry days for

                <span className="text-white font-semibold">

                  {" "} {selectedLink?.shortCode}

                </span>

              </p>

              <input
                type="number"
                min="1"
                placeholder="Enter expiry days"
                value={expiryDays}
                onChange={(e) =>
                  setExpiryDays(e.target.value)
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 mb-8"
              />

              <div className="flex justify-end gap-4">

                <button
                  onClick={() =>
                    setShowEditModal(false)
                  }
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition font-semibold cursor-pointer"
                >

                  Cancel

                </button>

                <button
                onClick={handleUpdateExpiry}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 transition font-semibold cursor-pointer"
                >

                  Save

                </button>

              </div>

            </div>

          </div>
        )
      }

    </div>
  );
}

export default Dashboard;