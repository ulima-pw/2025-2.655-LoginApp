import FormularioLogin from "./FormularioLogin"
import Titulo from "./Titulo"

import "./SeccionCentral.css"
import { Link, NavLink } from "react-router-dom"

const SeccionCentral = (props : SeccionCentralProps) => {
    return <div>
        { /* este es un comentario */ }
        <Titulo texto={props.texto} color={"#998877"}/>
        <div className="centrar">
            <img className="logo" 
                src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png' />
        </div>
        <FormularioLogin onLogin={ props.onLogin } />
        {
            (() => {
                if (props.errorLogin != undefined) {
                    return props.errorLogin ?
                        <div className="alert alert-danger mt-3">
                            Error en login
                        </div> :
                        <div className="alert alert-success mt-3">
                            Login exitoso
                        </div>
                }
            })()

            /*props.errorLogin != undefined ? (props.errorLogin ?
                <div className="alert alert-danger mt-3">
                    Error en login
                </div> :
                <div className="alert alert-success mt-3">
                    Login exitoso
                </div>) : ""*/
        }
        <Link className="btn btn-primary" to={ "/main" } >Link hacia MainPage</Link>
        <NavLink to={ "/main" } >Link hacia MainPage</NavLink>
        
        
    </div>
}

interface SeccionCentralProps {
    texto : string
    errorLogin? : boolean
    onLogin : (username : string, password: string) => void
}

export default SeccionCentral