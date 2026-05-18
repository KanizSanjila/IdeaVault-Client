import CourseCard from "@/components/CourseCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";



export default async function Home() {
  return (
    <div className="space-y-20">
     <Hero></Hero>
     <FeaturedCourses></FeaturedCourses>
     {/* <CourseCard></CourseCard> */}
     <Features></Features>
     <Stats></Stats>
    </div>
  );
}
