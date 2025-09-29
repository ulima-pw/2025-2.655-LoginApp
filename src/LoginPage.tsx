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
            const usuarioAGuardar = {
                username : username
            }
            sessionStorage.setItem(
                "USUARIO", 
                JSON.stringify(usuarioAGuardar)
            )

            navigate("/main")
        }else {
            // Login incorrecto
            setHuboErrorLogin(true)

            const usuario = sessionStorage.getItem("USUARIO")
            if (usuario == null) {
                const usuarioAGuardar = {
                    username : username,
                    contadorClicks : 1
                }
                sessionStorage.setItem(
                    "USUARIO", 
                    JSON.stringify(usuarioAGuardar)
                )
            }else {
                const usuarioTS = JSON.parse(usuario)
                const usuarioAGuardar = {
                    username : username,
                    contadorClicks : usuarioTS.contadorClicks + 1
                }
                sessionStorage.setItem(
                    "USUARIO", 
                    JSON.stringify(usuarioAGuardar)
                )
            }
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