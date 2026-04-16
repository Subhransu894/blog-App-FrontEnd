import { Link } from "react-router-dom"
export default function Navbar(){
    return (
        <nav className="d-flex justify-content-between align-items-center px-4" style={{backgroundColor:"#1e293b",height:"60px"}}>
            <Link to="/" className="text-decoration-none">
                <h2 className="text-white m-0">My Blog App</h2>
            </Link>
            <div>
                <Link to="/blogs" className="text-white me-3 text-decoration-none">Home</Link>
                <Link to="/createblog" className="text-white me-3 text-decoration-none">Create Blog</Link>
                <Link to="/" className="text-white me-3 text-decoration-none">Register</Link>
                <Link to="/login" className="text-white me-3 text-decoration-none">LogIn</Link>
            </div>
        </nav>
    )
}