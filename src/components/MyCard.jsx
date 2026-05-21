import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { UpdateIdea } from './UpdateIdea';
import { DeleteAlert } from './DeleteAlert';

const MyCard = ({idea}) => {
     const { _id, imageUrl, title,category,shortDescription } = idea;
    return (
      <div className="w-full mb-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-md">
  
  <div className="flex justify-end gap-3 mb-4">
    <UpdateIdea idea={idea}></UpdateIdea>
     <DeleteAlert idea={idea}></DeleteAlert>
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
</div>

    );
};

export default MyCard;