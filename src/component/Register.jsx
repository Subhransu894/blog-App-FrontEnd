import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Register(){
    const [form,setForm] = useState({
        name:"",
        email:"",
        password:"",
    })
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{
       try {
             e.preventDefault()
        
            const res = await fetch("https://blog-app-back-end-two.vercel.app/api/auth/register",{
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
            
            alert("Registration Successful. Please Login.")
            navigate("/login")
       } catch (error) {
            alert("Error registering user")
       }
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{minHeight:"80vh"}}>
            <h2 className="text-center mb-4 p-4" style={{fontSize:"16px",color:"green"}}>To get the access for this web App first register here... Have a good Day🥳</h2>
            <form className="p-4 shadow rounded" style={{width:"350px"}} onSubmit={handleSubmit}>
                <h3 className="text-center mb-3"style={{color:"blueviolet"}}>Register</h3>
                <input type="text" name="name" placeholder="Enter Your Name" className="form-control mb-3" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                <input type="email" name="email" placeholder="Ex: abc@email.com" className="form-control mb-3" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
                <input type="password" name="password" placeholder="Enter your password" className="form-control mb-3" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
                <button className="btn btn-success w-100" disabled={!form.email || !form.password || !form.name}>Register</button>
                <p className="text-center mt-3 mb-0">
                    Already have an account ? {" "}
                    <Link to="/login" className="text-primary text-decoration-none">Login</Link>
                </p>
            </form>
        </div>
    )
}