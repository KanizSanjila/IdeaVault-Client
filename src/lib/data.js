export const fetchData = async(searchTerm = "", category = "") =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course?searchTerm=${searchTerm}&category=${category}`)
    const data = await res.json();
    return data || [];
}
// export const fetchDataSearch = async() =>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`)
//     const data = await res.json();
//     return data || [];
// }

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