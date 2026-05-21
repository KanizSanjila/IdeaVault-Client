export const fetchData = async (searchTerm = "", category = "") => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/course?searchTerm=${searchTerm}&category=${category}`,
    { cache: "no-store" }
  );

  return res.json();
};

export const fetchFeaturedData = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`,
      { cache: "no-store" }
    )

    const data = await res.json();
    return data || [];
}
export const fetchIdea = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`,
      { cache: "no-store" }
    )
    const data = await res.json();
    return data || [];
}
