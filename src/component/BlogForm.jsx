import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function BlogForm(){
    const [form,setForm]=useState({
        title:"",
        content: "",
        author:"",
    })
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(id){
            //edit mode
            fetch(`https://blog-app-back-end-two.vercel.app/api/blogs/${id}`)
            .then((res)=>res.json())
            .then((data)=>setForm(data))
            .catch((err)=>console.log(err))
        }
        else{
            //create form 
            setForm({
                title:"",
                content:"",
                author:"",
            })
        }
    },[id])
    const handleChane =(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        const URL = id ? `https://blog-app-back-end-two.vercel.app/api/blogs/${id}` : `https://blog-app-back-end-two.vercel.app/api/blogs`;
        const method = id ? "PUT" :"POST"
        const res = await fetch(URL,{
            method,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(form)
        })
        const data = await res.json()
        console.log("Updated Result",data);
        navigate("/blogs")
    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"80vh"}}>
            <form onSubmit={handleSubmit} className="p-4 rounded shadow " style={{width:"100%",maxWidth:"400px"}}>
                <h2 className="text-center mb-3">{id ? "Edit Blog" : "Create Blog"}</h2>
                <input type="text" className="form-control " name="title" placeholder="Enter Title" value={form.title} onChange={handleChane} /><br /><br />
                <textarea type="text" className="form-control " name="content" placeholder="Enter Content" value={form.content} onChange={handleChane} /><br /><br />
                <input type="text" className="form-control " name="author" placeholder="Enter Author" value={form.author} onChange={handleChane} /><br /><br />
                <button className="btn btn-primary">{id?"Update Blog":"Create Blog"}</button>
            </form>
        </div>
    )
}