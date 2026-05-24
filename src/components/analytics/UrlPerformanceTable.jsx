import { ExternalLink } from "lucide-react";

import { Link } from "react-router-dom";

function UrlPerformanceTable({
  filteredUrls,
}) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold mb-2">

            URL Performance

          </h2>

          <p className="text-gray-400">

            Showing {filteredUrls.length} URLs

          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr className="text-left text-gray-400">

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

              <th className="pb-5">
                Created
              </th>

              <th className="pb-5">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {
              filteredUrls.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="py-16 text-center text-gray-400"
                  >

                    No matching URLs found

                  </td>

                </tr>

              ) : (

                filteredUrls.map(
                  (link, index) => (

                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/[0.03] transition"
                    >

                      <td className="py-6">

                        <span className="text-blue-400 font-medium">

                          {link.shortCode}

                        </span>

                      </td>

                      <td className="py-6 max-w-[320px]">

                        <div className="truncate text-gray-400 w-[320px]">

                          {link.originalUrl}

                        </div>

                      </td>

                      <td className="py-6 font-semibold">

                        {link.clickCount || 0}

                      </td>

                      <td className="py-6">

                        {
                          link.expired ? (

                            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm">

                              Expired

                            </span>

                          ) : (

                            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">

                              Active

                            </span>
                          )
                        }

                      </td>

                      <td className="py-6 text-gray-400">

                        {
                          new Date(
                            link.createdAt
                          ).toLocaleDateString()
                        }

                      </td>

                      <td className="py-6">

                        <div className="flex items-center gap-5">

                          <a
                            href={`https://linkzen-backend-2.onrender.com/${link.shortCode}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                          >

                            Open

                            <ExternalLink size={16} />

                          </a>

                          <Link
                            to={`/analytics/${link.shortCode}`}
                            className="text-blue-400 hover:text-blue-300 transition"
                          >

                            View Details

                          </Link>

                        </div>

                      </td>

                    </tr>
                  )
                )
              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UrlPerformanceTable;