function RecentLinksTable() {

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

            <tr className="border-b border-white/5">

              <td className="p-6 text-blue-400">
                linkzen.app/tech
              </td>

              <td className="p-6 text-gray-400">
                youtube.com/watch?v=123
              </td>

              <td className="p-6">
                1240
              </td>

              <td className="p-6 text-green-400">
                Active
              </td>

            </tr>

            <tr>

              <td className="p-6 text-blue-400">
                linkzen.app/dev
              </td>

              <td className="p-6 text-gray-400">
                github.com/project
              </td>

              <td className="p-6">
                832
              </td>

              <td className="p-6 text-yellow-400">
                Expiring Soon
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default RecentLinksTable;