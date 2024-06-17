import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhinav-378')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div>
      <h1 className='text-center text-4xl py-5'>Github followers: {data.followers}</h1>

      <img src={data.avatar_url} alt="github_profile_img" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/abhinav-378')

    return response.json()
}
