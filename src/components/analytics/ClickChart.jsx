function ClickChart({ data }) {

  const clicks =
    Object.entries(data || {});

  const max =
    Math.max(
      ...clicks.map(
        ([, value]) => value
      ),
      1
    );

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Click Activity

      </h2>

      <div className="flex items-end gap-4 h-[250px]">

        {
          clicks.length === 0 ? (

            <p className="text-gray-400">

              No click data available

            </p>

          ) : (

            clicks.map(
              ([date, count]) => (

                <div
                  key={date}
                  className="flex-1 flex flex-col items-center"
                >

                  <div
                    className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-xl"
                    style={{
                      height:
                        `${(count / max) * 100}%`,
                    }}
                  />

                  <p className="text-xs mt-2 text-gray-400">

                    {date.slice(5)}

                  </p>

                </div>
              )
            )
          )
        }

      </div>

    </div>
  );
}

export default ClickChart;