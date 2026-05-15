import { useEffect, useState } from "react";
import { getAllUrls } from "../services/urlService";

function RecentLinksTable() {

  const [recentLinks, setRecentLinks] = useState([]);

  useEffect(() => {

    const fetchUrls = async () => {

      try {

        const data = await getAllUrls();

        setRecentLinks(data);

      } catch (error) {

        console.error(error);
      }
    };

    fetchUrls();

  }, []);

  return (

    <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

      <div className="mb-10">

        <h2 className="text-4xl font-bold mb-3">
          Recent Links
        </h2>

        <p className="text-gray-400">
          Recently generated short links
        </p>

      </div>

      <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-3xl">

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr className="text-left">

              <th className="p-6">
                Short URL
              </th>

              <th className="p-6">
                Original URL
              </th>

              <th className="p-6">
                Clicks
              </th>

              <th className="p-6">
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
                    className="p-10 text-center text-gray-400"
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

                    <td className="p-6 text-blue-400">

                      <a
                        href={`https://linkzen-backend-2.onrender.com/${link.shortCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {link.shortCode}
                      </a>

                    </td>

                    <td className="p-6 text-gray-400">

                      {link.originalUrl}

                    </td>

                    <td className="p-6">

                      {link.clickCount || 0}

                    </td>

                    <td
                      className={`p-6 ${
                        link.expired
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >

                      {
                        link.expired
                          ? "Expired"
                          : "Active"
                      }

                    </td>

                  </tr>
                ))
              )
            }

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default RecentLinksTable;