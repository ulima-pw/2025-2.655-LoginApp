import { useState } from "react"
import SeccionCentral from "./SeccionCentral"
import { useNavigate } from "react-router-dom"



const LoginPage = () => {
    const [huboErrorLogin, setHuboErrorLogin] = useState<boolean | undefined>(undefined)

    const navigate = useNavigate()

    const login = (username : string, password : string) => {
        if (username == "PW" && password == "billy") {
            // Login correcto
            setHuboErrorLogin(false)
            navigate("/main")
        }else {
            // Login incorrecto
            setHuboErrorLogin(true)
        }
    }

    return <div>
        <div className="row">
            <div className="col">
                &nbsp;
            </div>
            <div className="col">
                <SeccionCentral texto={"Login"}
                    errorLogin={ huboErrorLogin }
                    onLogin={ login } />
            </div>
            <div className="col">
                &nbsp;
            </div>
        </div>
    </div>
}

export default LoginPage