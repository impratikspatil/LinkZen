function StatsCards() {

  const stats = [

    {
      title: "URLs Created",
      value: "12.4K",
      description: "Short links generated",
    },

    {
      title: "Total Clicks",
      value: "1.2M",
      description: "Redirects processed",
    },

    {
      title: "Active Links",
      value: "8.9K",
      description: "Currently live URLs",
    },

    {
      title: "Success Rate",
      value: "99.9%",
      description: "Reliable uptime",
    },

  ];

  return (

    <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {
          stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-500/30 transition"
            >

              <p className="text-gray-400 mb-3 text-sm">
                {stat.title}
              </p>

              <h2 className="text-4xl font-bold mb-2">
                {stat.value}
              </h2>

              <p className="text-gray-500 text-sm">
                {stat.description}
              </p>

            </div>
          ))
        }

      </div>

    </section>
  );
}

export default StatsCards;