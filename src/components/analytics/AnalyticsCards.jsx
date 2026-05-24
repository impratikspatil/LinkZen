function AnalyticsCard({
  title,
  value,
  icon,
}) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <div className="flex items-center justify-between mb-5">

        <p className="text-gray-400">
          {title}
        </p>

        {icon}

      </div>

      <h2 className="text-5xl font-bold">
        {value}
      </h2>

    </div>
  );
}

export default AnalyticsCard;