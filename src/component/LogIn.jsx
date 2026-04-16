import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function LogIn(){
    const [form,setForm]=useState({
        email:"",
        password:"",
    })
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        try {
            e.preventDefault()

            const res=await fetch("https://blog-app-back-end-two.vercel.app/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(form)
            })
            const data = await res.json() 

            if(!res.ok){
                alert(data.message)
                return
            }
            
            localStorage.setItem("token",data.token)
            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful")
            navigate("/blogs")
        } catch (error) {
            alert("Invalid email or password")
        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{minHeight:"80vh"}}>
            <form className="p-4 shadow rounded" style={{width:"350px"}} onSubmit={handleSubmit}>
                <h3 className="text-center mb-3" style={{color:"blueviolet"}}>LogIn</h3>
                <input type="email" placeholder="Enter EmailId" className="form-control mb-3" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
                <input type="password" placeholder="Enter Password" className="form-control mb-3" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
                <button className="btn btn-primary w-100"  disabled={!form.email || !form.password}>Login</button>
                <p className="text-center mt-3 mb-0">
                    Don't have any account? {" "}
                    <Link to="/" className="text-primary text-decoration-none">Register</Link>
                </p>
            </form>
        </div>
    )
}