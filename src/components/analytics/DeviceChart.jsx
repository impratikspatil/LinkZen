function DeviceChart({ data }) {

  const total =
    Object.values(data || {})
      .reduce((a, b) => a + b, 0);

  const devices =
    Object.entries(data || {})
      .map(([device, count]) => ({
        device,
        percentage:
          total === 0
            ? 0
            : Math.round(
                (count / total) * 100
              ),
      }));

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Device Analytics

      </h2>

      <div className="space-y-6">

        {
          devices.length === 0 ? (

            <p className="text-gray-400">

              No device data available

            </p>

          ) : (

            devices.map((item, index) => (

              <div key={index}>

                <div className="flex justify-between mb-2">

                  <p>{item.device}</p>

                  <p>{item.percentage}%</p>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full">

                  <div
                    style={{
                      width:
                        `${item.percentage}%`
                    }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />

                </div>

              </div>
            ))
          )
        }

      </div>

    </div>
  );
}

export default DeviceChart;