export const fetchData = async(searchTerm='') =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course?search=${searchTerm}`)
    const data = await res.json();
    return data || [];
}

export const fetchFeaturedData = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
    const data = await res.json();
    return data || [];
}
export const fetchIdea = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`)
    const data = await res.json();
    return data || [];
}