function DeviceChart() {

  const devices = [
    {
      device: "Mobile",
      percentage: 60,
    },
    {
      device: "Desktop",
      percentage: 30,
    },
    {
      device: "Tablet",
      percentage: 10,
    },
  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Device Analytics

      </h2>

      <div className="space-y-6">

        {
          devices.map((item, index) => (

            <div key={index}>

              <div className="flex items-center justify-between mb-2">

                <p className="text-gray-300">

                  {item.device}

                </p>

                <p className="text-gray-400">

                  {item.percentage}%

                </p>

              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <div
                  style={{
                    width: `${item.percentage}%`,
                  }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                ></div>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default DeviceChart;