function BrowserChart({ data }) {

  const total =
    Object.values(data || {})
      .reduce((a, b) => a + b, 0);

  const browsers =
    Object.entries(data || {})
      .map(([name, count]) => ({
        name,
        value:
          total === 0
            ? 0
            : Math.round(
                (count / total) * 100
              ),
      }));

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Browser Analytics
      </h2>

      <div className="space-y-6">

        {
          browsers.length === 0 ? (
            <p className="text-gray-400">
              No browser data available
            </p>
          ) : (
            browsers.map((browser, index) => (

              <div key={index}>

                <div className="flex justify-between mb-2">

                  <p>{browser.name}</p>

                  <p>{browser.value}%</p>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full">

                  <div
                    style={{
                      width:
                        `${browser.value}%`
                    }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
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

export default BrowserChart;