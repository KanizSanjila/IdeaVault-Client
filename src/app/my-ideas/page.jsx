
import FeaturedCard from '@/components/FeaturedCard';
import MyCard from '@/components/MyCard';
import { fetchIdea } from '@/lib/data';

const MyIdeaPage = async () => {
  
  const ideas = await fetchIdea();
console.log(ideas)
  return (
    <div>
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-slate-950 flex items-center gap-2">
            My Idea
          </h1>
          <p className="text-sm text-slate-500 font-medium">Only you can view, edit, or manage these items.</p>
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {
            ideas.map(idea=><MyCard key={idea._id} idea={idea}></MyCard>)
        }
       </div>
    </div>
  );
};

export default MyIdeaPage;