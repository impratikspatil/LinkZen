function BrowserChart() {

  const browsers = [
    {
      name: "Chrome",
      value: 65,
    },
    {
      name: "Safari",
      value: 20,
    },
    {
      name: "Firefox",
      value: 10,
    },
    {
      name: "Edge",
      value: 5,
    },
  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Browser Analytics

      </h2>

      <div className="space-y-6">

        {
          browsers.map((browser, index) => (

            <div key={index}>

              <div className="flex items-center justify-between mb-2">

                <p className="text-gray-300">

                  {browser.name}

                </p>

                <p className="text-gray-400">

                  {browser.value}%

                </p>

              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <div
                  style={{
                    width: `${browser.value}%`,
                  }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                ></div>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default BrowserChart;