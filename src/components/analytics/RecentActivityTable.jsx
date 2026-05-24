function RecentActivityTable() {

  const activities = [
    {
      browser: "Chrome",
      device: "Desktop",
      country: "India",
      time: "2 mins ago",
    },
    {
      browser: "Safari",
      device: "Mobile",
      country: "USA",
      time: "10 mins ago",
    },
    {
      browser: "Firefox",
      device: "Desktop",
      country: "Germany",
      time: "25 mins ago",
    },
    {
      browser: "Edge",
      device: "Tablet",
      country: "Canada",
      time: "1 hour ago",
    },
  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Recent Activity

      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr className="text-left text-gray-400">

              <th className="pb-5">
                Browser
              </th>

              <th className="pb-5">
                Device
              </th>

              <th className="pb-5">
                Country
              </th>

              <th className="pb-5">
                Activity Time
              </th>

            </tr>

          </thead>

          <tbody>

            {
              activities.map(
                (activity, index) => (

                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/[0.03] transition"
                  >

                    <td className="py-5">

                      {activity.browser}

                    </td>

                    <td className="py-5 text-gray-400">

                      {activity.device}

                    </td>

                    <td className="py-5 text-gray-400">

                      {activity.country}

                    </td>

                    <td className="py-5 text-gray-400">

                      {activity.time}

                    </td>

                  </tr>
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