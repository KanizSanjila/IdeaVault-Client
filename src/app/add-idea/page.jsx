"use client";

import { Input } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddIdeaPage() {

  const [loading, setLoading] = useState(false);

  const handleAddIdea = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const newIdea = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      detailedDescription: form.detailedDescription.value,
      category: form.category.value,
      tags: form.tags.value,
      imageURL: form.imageURL.value,
      estimatedBudget: form.estimatedBudget.value,
      targetAudience: form.targetAudience.value,
      problemStatement: form.problemStatement.value,
      proposedSolution: form.proposedSolution.value,
      createdAt: new Date(),
    };

    try {

      const res = await fetch("http://localhost:5000/ideas", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newIdea),
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

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-black text-slate-800 mb-4">
            Submit Your Startup Idea
          </h1>

          <p className="text-slate-500 font-medium">
            Share your innovative startup concept with the community.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleAddIdea}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Idea Title */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700">
              Idea Title
            </label>

            <Input
              type="text"
              name="title"
              required
              placeholder="Enter startup idea title"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="font-bold text-black">
              Category
            </label>

            <select  
              name="category"
              required
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Tech">Tech</option>
              <option value="Health">Health</option>
              <option value="AI">AI</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="Productivity">Productivity</option>
            </select>
          </div>

          {/* Short Description */}
          <div className="md:col-span-2 space-y-2">
            <label className="font-bold text-slate-700">
              Short Description
            </label>

            <Input
              type="text"
              name="shortDescription"
              required
              placeholder="Short startup summary"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Detailed Description */}
          <div className="md:col-span-2 space-y-2">
            <label className="font-bold text-slate-700">
              Detailed Description
            </label>

            <textarea
              name="detailedDescription"
              required
              rows="5"
              placeholder="Explain your startup idea in detail..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700">
              Tags
            </label>

            <Input
              type="text"
              name="tags"
              placeholder="AI, SaaS, Startup"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700">
              Image URL
            </label>

            <Input
              type="url"
              name="imageURL"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Estimated Budget */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700">
              Estimated Budget
            </label>

            <Input
              type="number"
              name="estimatedBudget"
              placeholder="$5000"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Target Audience */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700">
              Target Audience
            </label>

            <Input
              type="text"
              name="targetAudience"
              required
              placeholder="Students, Businesses, Developers..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Problem Statement */}
          <div className="md:col-span-2 space-y-2">
            <label className="font-bold text-slate-700">
              Problem Statement
            </label>

            <textarea
              name="problemStatement"
              required
              rows="4"
              placeholder="What problem are you solving?"
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Proposed Solution */}
          <div className="md:col-span-2 space-y-2">
            <label className="font-bold text-slate-700">
              Proposed Solution
            </label>

            <textarea
              name="proposedSolution"
              required
              rows="4"
              placeholder="Explain your solution..."
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
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