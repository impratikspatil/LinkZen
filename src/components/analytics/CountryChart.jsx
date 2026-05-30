function CountryChart({ data }) {

  const countries =
    Object.entries(data || {});

  const max =
    Math.max(
      ...countries.map(
        ([, count]) => count
      ),
      1
    );

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Country Traffic

      </h2>

      <div className="space-y-6">

        {
          countries.length === 0 ? (

            <p className="text-gray-400">

              No country data available

            </p>

          ) : (

            countries.map(
              ([country, count], index) => (

                <div key={index}>

                  <div className="flex items-center justify-between mb-2">

                    <p className="text-gray-300">

                      {country}

                    </p>

                    <p className="text-gray-400">

                      {count}

                    </p>

                  </div>

                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                    <div
                      style={{
                        width: `${(count / max) * 100}%`,
                      }}
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    ></div>

                  </div>

                </div>
              )
            )
          )
        }

      </div>

    </div>
  );
}

export default CountryChart;