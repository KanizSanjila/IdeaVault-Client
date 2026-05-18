import Link from 'next/link';
import React from 'react';

const CourseCard = ({idea}) => {
    // console.log(idea)
    const {_id,title,category,imageUrl,estimatedBudget,detailedDescription,tags} = idea
  return (
    <div className="max-w-sm mx-auto bg-linear-to-r from-slate-200 to-blue-500 rounded-2xl overflow-hidden flex flex-col hover:border-slate-700/80 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 text-white font-sans">
      
      {/* Card Image */}
      <div className="h-48 w-full overflow-hidden relative">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"} 
          alt="Cyber Security AI" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
        />
        <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Title & Short Description */}
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-2 text-slate-100">
            {title}
          </h3>
          <p className="text-black text-sm font-light line-clamp-2">
           {detailedDescription}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[11px] bg-slate-800 text-gray-300 px-2.5 py-0.5 rounded-md font-medium">{tags[0]}</span>
          <span className="text-[11px] bg-slate-800 text-gray-300 px-2.5 py-0.5 rounded-md font-medium">{tags[2]}</span>
        </div>

        {/* Extra Info Lines */}
        <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Est. Budget:</span>
            <span className=" font-semibold">${estimatedBudget}</span>
          </div>
        </div>

        {/* Action Button (Simple Link/Explore) */}
        <div className="pt-2 mt-auto">
         <Link href={`/ideas/${_id}`}>
            <button className="w-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
            View Details 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
         </Link>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;