import { useNavigate } from "react-router-dom"
import Titulo from "./Titulo"

const MainPage = () => {
    const navigate = useNavigate()
    
    const logout = () => {
        sessionStorage.clear()
        navigate("/")
    }

    return <div>
        <Titulo texto={"Main"}/>
        <button className="btn btn-danger" 
            onClick={ logout }>
                Logout
        </button>
    </div>
}

export default MainPage