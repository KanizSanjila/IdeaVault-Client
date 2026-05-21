
import { auth } from '@/lib/auth';
import { Chip } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { MdAttachMoney ,MdMilitaryTech,MdOutlineTitle } from "react-icons/md";

const fetchSingleCourse =async (id,token) =>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course/${id}`,{
        headers:{
            authorization:`Bearer ${token}` || ""
        }
     })
    const data =await res.json();
    return data || {};
}

export default async function CourseDetails({params}) {
    const {id} = await params;
    const {token} = await auth.api.getToken({
        headers: await headers(),
      });

    const course = await fetchSingleCourse(id,token)
    const {_id,title,category,imageUrl,estimatedBudget,detailedDescription,tags,shortDescription,problemStatement,targetAudience} = course

    const featuredItems = [
        { icon: MdAttachMoney, label: estimatedBudget || '30,000' },
        { icon: MdOutlineTitle, label: title || 'Beginner' },
        { icon: MdMilitaryTech, label:category || 'Tech' },
    ];
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
                        <Image
                            src={imageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200'}
                            alt="Course Thumbnail"
                            fill
                            className="object-cover transform transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6">
                            <Chip
                                color="primary"
                                variant="solid"
                                className="font-bold shadow-xl"
                            >
                                {tags[0]}
                            </Chip>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            {shortDescription}
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                           {detailedDescription}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                        {featuredItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200 text-slate-900 font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <item.icon className="w-5 h-5 text-blue-600" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>

                </div>

               <div className="lg:col-span-1">
  <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">

    {/* Comment Header */}
    <div className="space-y-2">
      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
        Comments
      </p>

      <h2 className="text-3xl font-black text-slate-800">
        Community Feedback
      </h2>
    </div>

    {/* Add Comment */}
    <div className="space-y-4">
      <textarea
        placeholder="Write your comment..."
        className="w-full min-h-[120px] rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold py-3 rounded-2xl shadow-lg">
        Add Comment
      </button>
    </div>

    <div className="w-full h-px bg-slate-100"></div>

    {/* Comment List */}
    <div className="space-y-5">

      {/* Single Comment */}
      <div className="bg-white/80 border border-slate-100 rounded-2xl p-5 space-y-3 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-800">
              Kaniz Sanjila
            </h3>

            <p className="text-xs text-slate-400">
              May 20, 2026 • 10:45 PM
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
              Edit
            </button>

            <button className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition">
              Delete
            </button>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          This course explanation is amazing. I learned many advanced concepts easily.
        </p>
      </div>

      {/* Another Comment */}
      <div className="bg-white/80 border border-slate-100 rounded-2xl p-5 space-y-3 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-800">
              John Doe
            </h3>

            <p className="text-xs text-slate-400">
              May 19, 2026 • 7:20 PM
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
              Edit
            </button>

            <button className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition">
              Delete
            </button>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          Very professional course structure and easy to follow.
        </p>
      </div>

    </div>

    <p className="text-center text-xs text-slate-500 font-bold">
      Users can add, edit, and delete their own comments
    </p>

  </div>
</div>
            </div>
        </div>
    );
}
