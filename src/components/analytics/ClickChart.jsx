function ClickChart({ data }) {

  const clicks = Object.entries(data || {});

  const max = Math.max(
    ...clicks.map(([, value]) => value),
    1
  );

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Click Activity
      </h2>

      {clicks.length === 0 ? (

        <p className="text-gray-400">
          No click data available
        </p>

      ) : (

        <div className="relative h-[220px] flex items-end gap-3">

          {clicks.map(([date, count]) => {

            const heightPercent =
              Math.max((count / max) * 100, 2);

            return (

              <div
                key={date}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >

                {/* Click count label above bar */}
                <p className="text-xs font-semibold text-white mb-1">
                  {count > 0 ? count : ""}
                </p>

                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-xl transition-all duration-500"
                  style={{
                    height: `${heightPercent}%`,
                    minHeight: count > 0 ? "8px" : "2px",
                  }}
                />

                {/* Date label below bar */}
                <p className="text-xs mt-2 text-gray-400 truncate w-full text-center">
                  {date.slice(5)}
                </p>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default ClickChart;