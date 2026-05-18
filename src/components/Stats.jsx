import React from 'react';

const Stats = () => {
  const metrics = [
    { id: 1, value: "150+", label: "Startups Funded", color: "from-cyan-400 to-blue-500" },
    { id: 2, value: "$45M+", label: "Capital Raised", color: "from-purple-400 to-pink-500" },
    { id: 3, value: "30+", label: "Global Partners", color: "from-indigo-400 to-cyan-400" },
    { id: 4, value: "92%", label: "Success Rate", color: "from-emerald-400 to-teal-500" }
  ];

  return (
    <section className="bg-slate-950 text-white py-16 border-t border-b border-slate-900 relative overflow-hidden container mx-auto rounded-2xl">
      {/* Background Accent Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((stat) => (
            <div key={stat.id} className="space-y-2">
              
              {/* Number with Gradient Text */}
              <div className={`text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;