import { CommentUpdate } from '@/components/CommentUpdate';
import { CommentDelete } from '@/components/CommentDelete';
import React from 'react';
import CommentCard from '@/components/CommentCard';

const CommentPage =async () => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-interactions`,
        { cache: "no-store" }
     )
    const data = await res.json();
//   console.log('data',data)
    return (
        <div className='container mx-auto'>
           {
  data.map((comments) => (
    <CommentCard key={comments._id} comments={comments}>
    </CommentCard>
  ))
}
           
 </div>
    );
};

export default CommentPage;