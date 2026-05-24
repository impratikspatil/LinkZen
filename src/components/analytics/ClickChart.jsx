function ClickChart() {

  const weeklyClicks = [
    40,
    65,
    30,
    90,
    55,
    75,
    110,
  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        Weekly Click Activity

      </h2>

      <div className="flex items-end gap-4 h-[250px]">

        {
          weeklyClicks.map((click, index) => (

            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-2xl"
              style={{
                height: `${click}%`,
              }}
            ></div>
          ))
        }

      </div>

    </div>
  );
}

export default ClickChart;