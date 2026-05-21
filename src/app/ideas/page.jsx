import CourseCard from "@/components/CourseCard";
import CoursesHeader from "@/components/CoursesHeader";
import { fetchData } from "@/lib/data";
import { Button } from "@heroui/react";
import { Filter, Lightbulb } from "lucide-react";

const dataPage =async ({ searchParams }) => {
   const searchTerm = searchParams?.searchTerm || "";
  const category = searchParams?.category || "";
console.log(searchTerm,category)
  const ideas = await fetchData(searchTerm, category);
    return (
          <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <CoursesHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-blue-600" />
                        All Ideas
                    </h2>
                    <Button
                        variant="flat"
                        
                        className="rounded-full font-bold"
                    >
                        Filters
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        ideas?.map((idea) => <CourseCard key={idea?._id} idea={idea} />
                        )
                    }
                    
                </div>


            </main>
        </div>
    );
};

export default dataPage;