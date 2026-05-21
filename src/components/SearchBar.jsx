
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@heroui/react";

const SearchBar = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

 const handleSearch = () => {
  const params = new URLSearchParams();

  if (search) params.set("searchTerm", search);
  if (category) params.set("category", category);

  router.push(`/ideas?${params.toString()}`);
};

  return (
    <div>

      {/* Search Box */}
      <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-5">

        <div className="pl-5 text-slate-400">
          <Search className="w-5 h-5" />
        </div>

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for Ideas..."
          className="flex-1"
        />

        <button
          onClick={handleSearch}
          className="h-10 px-6 mr-2 rounded-xl bg-blue-600 text-white font-semibold"
        >
          Search
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex items-end gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

        <div className="space-y-2 w-full">

          <label className="font-bold text-black">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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

        <button
          onClick={handleSearch}
          className="h-12 px-6 rounded-xl bg-blue-600 text-white font-semibold"
        >
          Filter
        </button>

      </div>

    </div>
  );
};

export default SearchBar;