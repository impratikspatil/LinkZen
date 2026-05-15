function DashboardPreview() {

  return (

    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold mb-4">
          Analytics Dashboard
        </h2>

        <p className="text-gray-400 text-lg">
          Track clicks, performance and link activity
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-black/30 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Total Clicks
            </p>

            <h3 className="text-4xl font-bold">
              12,483
            </h3>

          </div>

          <div className="bg-black/30 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Active Links
            </p>

            <h3 className="text-4xl font-bold">
              248
            </h3>

          </div>

          <div className="bg-black/30 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              CTR Rate
            </p>

            <h3 className="text-4xl font-bold">
              82%
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;