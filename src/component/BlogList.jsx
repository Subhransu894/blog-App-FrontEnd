import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function BlogList(){
    const [blogs,setBlogs]=useState([])
    const navigate = useNavigate()
    const fetchBlogs=()=>{
        fetch("https://blog-app-back-end-two.vercel.app/api/blogs")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setBlogs(data)})
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
       fetchBlogs()
    },[])
    const handleDelete = async(id)=>{
        await fetch(`https://blog-app-back-end-two.vercel.app/api/blogs/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        fetchBlogs() //refresh instantly
    }
    return(
        <div className="container mt-4">
            <h2>All Blogs</h2>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div key={blog._id} className="card p-3 mb-3">
                    <h4>{blog.title}</h4>
                    <p>{blog.content}</p>
                    <small>Author: {blog.author}</small>
                        <div className="d-flex mt-2">
                            <button className="btn btn-danger mt-2" style={{ maxWidth: "100px" }} onClick={() => handleDelete(blog._id)}>
                                Delete
                            </button>
                            <button className="btn btn-primary mt-2 ms-2" style={{ maxWidth: "100px" }} onClick={()=>navigate(`/edit/${blog._id}`)}>
                                Edit
                            </button>
                        </div>
                    </div>
                ))
                ) : (
                <p>Loading...</p>
                )}
        </div>
    )
}