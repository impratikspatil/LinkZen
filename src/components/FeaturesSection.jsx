function FeaturesSection() {

  return (

    <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">

      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold mb-4">
          Powerful Features
        </h2>

        <p className="text-gray-400 text-lg">
          Everything you need in a modern URL shortener
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 text-2xl">
            🔗
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Custom Aliases
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Create personalized and branded short URLs
            for marketing campaigns, social sharing
            and better recognition.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6 text-2xl">
            📊
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Advanced Analytics
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Track clicks, browsers, devices,
            IP addresses and traffic sources
            with real-time analytics.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-pink-500/30 transition">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6 text-2xl">
            ⏳
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Expiry Links
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Generate temporary links with expiry
            dates for secure file sharing
            and controlled access.
          </p>

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;