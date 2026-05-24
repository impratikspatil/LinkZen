function TrafficSources({
  directPercentage,
  socialPercentage,
  searchPercentage,
}) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">

        Traffic Sources

      </h2>

      <div className="space-y-6">

        <div>

          <div className="flex items-center justify-between mb-2">

            <p className="text-gray-300">
              Direct
            </p>

            <p className="text-gray-400">
              {directPercentage}%
            </p>

          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div
              style={{
                width: `${directPercentage}%`,
              }}
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            ></div>

          </div>

        </div>

        <div>

          <div className="flex items-center justify-between mb-2">

            <p className="text-gray-300">
              Social Media
            </p>

            <p className="text-gray-400">
              {socialPercentage}%
            </p>

          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div
              style={{
                width: `${socialPercentage}%`,
              }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            ></div>

          </div>

        </div>

        <div>

          <div className="flex items-center justify-between mb-2">

            <p className="text-gray-300">
              Search
            </p>

            <p className="text-gray-400">
              {searchPercentage}%
            </p>

          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

            <div
              style={{
                width: `${searchPercentage}%`,
              }}
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            ></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TrafficSources;