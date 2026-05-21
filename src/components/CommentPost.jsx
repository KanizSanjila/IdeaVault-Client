"use client";

import { Input } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CommentPost() {

  const [loading, setLoading] = useState(false);

  const handleAddIdea = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

  const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());
       loginData.createdAt = new Date();

    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-interactions`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (data.insertedId) {

        toast.success("Idea Added Successfully!");

        form.reset();
      }

    } catch (error) {

      toast.error(error.message);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-5">

      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-[2rem] p-10">

        <div className="text-center mb-12">

          <h1 className="text-2xl font-black text-slate-800 mb-4">
            Add Comment
          </h1>
        </div>

        <form
          onSubmit={handleAddIdea}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <div className="space-y-2">
            <label className="font-bold text-slate-700">
              comment...
            </label>

            <Input
              type="text"
              name="comment"
              required
              placeholder="Enter Your Comment"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="font-bold text-slate-700">
             Name
            </label>

            <Input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-black py-4 rounded-2xl shadow-lg"
            >
              {
                loading
                  ? "Submitting..."
                  : "Submit Idea"
              }
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}