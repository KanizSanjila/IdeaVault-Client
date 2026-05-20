import { Chip } from '@heroui/react';
import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyCard = ({idea}) => {
     const { _id, imageUrl, title, estimatedBudget, category,shortDescription } = idea;
    return (
      <div className="max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-md">
  {/* Top Actions */}
  <div className="flex justify-end gap-3 mb-4">
    <button className="text-indigo-600 font-medium hover:underline">
      Edit
    </button>

    <button className="rounded-md bg-red-500 px-3 py-1 text-white text-sm font-medium hover:bg-red-600 transition">
      Delete
    </button>
  </div>

 
  <p className="text-sm text-indigo-500 font-medium mb-2">
  {category}
  </p>

  <h2 className="text-2xl font-bold text-gray-900 mb-2">
   {title}
  </h2>

 
  <p className="text-gray-500 text-sm mb-4">
   {shortDescription}
  </p>

  <div className="flex items-center gap-2 mb-5">
   <Image src={imageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'}
   
                       alt="Course Image"
                       height={400}
                       width={640}
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                       className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
  </div>
 <Link href={`/ideas/${_id}`}>
            <button className="w-full bg-slate-800 text-white hover:bg-cyan-500 hover:text-slate-950 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
            View Details 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
         </Link>
</div>

    );
};

export default MyCard;