import { useEffect, useState } from "react"

export const PostList = ()=>{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
        .then(res =>res.json())
        .then((data)=>setPosts(data))
        .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map((post)=>{
                        return <li key={post.id}>
                            {post.title}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}