import CourseCard from "@/components/CourseCard";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";



export default async function Home() {
  return (
    <div className=" flex flex-col min-h-screen">
     <Hero></Hero>
     <FeaturedCourses></FeaturedCourses>
     <Features></Features>
     <Stats></Stats>
    </div>
  );
}
