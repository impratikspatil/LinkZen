function RecentActivityTable({ data }) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Recent Activity

      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left text-gray-400">

              <th>Browser</th>

              <th>Device</th>

              <th>OS</th>

              <th>Clicked At</th>

            </tr>

          </thead>

          <tbody>

            {
              !data || data.length === 0 ? (

                <tr>

                  <td
                    colSpan="4"
                    className="py-10 text-center text-gray-400"
                  >

                    No activity yet

                  </td>

                </tr>

              ) : (

                data.map(
                  (activity, index) => (

                    <tr
                      key={index}
                      className="border-b border-white/5"
                    >

                      <td className="py-4">

                        {activity.browser}

                      </td>

                      <td className="py-4">

                        {activity.deviceType}

                      </td>

                      <td className="py-4">

                        {activity.operatingSystem}

                      </td>

                      <td className="py-4">

                        {
                          new Date(
                            activity.clickedAt
                          ).toLocaleString()
                        }

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

export default RecentActivityTable;