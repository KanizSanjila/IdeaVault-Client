export const fetchData = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`)
    const data = await res.json();
    return data || [];
}

export const fetchFeaturedData = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
    const data = await res.json();
    return data || [];
}