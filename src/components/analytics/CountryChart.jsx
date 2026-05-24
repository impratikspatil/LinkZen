function CountryChart() {

  const countries = [
    {
      country: "India",
      clicks: 70,
    },
    {
      country: "USA",
      clicks: 15,
    },
    {
      country: "Germany",
      clicks: 10,
    },
    {
      country: "Canada",
      clicks: 5,
    },
  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Country Traffic

      </h2>

      <div className="space-y-6">

        {
          countries.map((item, index) => (

            <div key={index}>

              <div className="flex items-center justify-between mb-2">

                <p className="text-gray-300">

                  {item.country}

                </p>

                <p className="text-gray-400">

                  {item.clicks}%

                </p>

              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                <div
                  style={{
                    width: `${item.clicks}%`,
                  }}
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                ></div>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default CountryChart;