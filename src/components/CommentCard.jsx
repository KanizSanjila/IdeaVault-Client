import React from 'react';
import { CommentUpdate } from '@/components/CommentUpdate';
import { CommentDelete } from '@/components/CommentDelete';

const CommentCard =async ({comments}) => {
    return (
        <div className='mt-10'>
          <div>
               <div
        key={comments._id}
        className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 hover:shadow-2xl transition-all"
      >
        <div className="flex items-center gap-4 mb-4">

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            {comments.name?.charAt(0)}
          </div>

          <div>
            <h2 className="font-bold text-slate-800 text-lg">
              {comments.name}
            </h2>

            <p className="text-sm text-slate-500">
              {new Date(comments.createdAt).toLocaleString()}
            </p>
          </div>

        </div>
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">

          <p className="text-slate-700 leading-relaxed">
            {comments.comment}
          </p>

        </div>

      </div>
            </div> 
            <div>
                {/* <CommentUpdate comments={comments}></CommentUpdate>
           <CommentDelete comments={comments}></CommentDelete> */}
                </div> 
        </div>
    );
};

export default CommentCard;