import React from 'react';

const Features = () => {
  const pillars = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Incubation",
      description: "Accelerate your development cycle with our curated tech stacks and ready-to-deploy architectural frameworks."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Global Mentorship",
      description: "Gain direct access to industry veterans and successful founders who have scaled products to millions of users."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Secure Funding",
      description: "Pitch directly to top-tier VCs and angel networks looking for the next disruptive innovation."
    }
  ];

  return (
    <section className="bg-slate-950 text-white py-20 border-t border-slate-900 container mx-auto rounded-2xl">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Why Startups Thrive Here
          </h2>
          <p className="text-gray-400 text-lg font-light">
            We provide the complete ecosystem designed to take your raw innovation from concept to global market domination.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 group"
            >
              {/* Icon Wrapper */}
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 tracking-tight">
                {pillar.title}
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;