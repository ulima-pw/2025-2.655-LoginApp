import SeccionCentral from "./SeccionCentral"

const login = (username : string, password : string) => {
    if (username == "PW" && password == "billy") {
        // Login correcto
        console.log("LOGIN EXITOSO")
    }else {
        // Login incorrecto
        console.log("LOGIN ERROR")
    }
}

const LoginPage = () => {
    return <div>
        <div className="row">
            <div className="col">
                &nbsp;
            </div>
            <div className="col">
                <SeccionCentral texto={"Login"}
                    onLogin={ login } />
            </div>
            <div className="col">
                &nbsp;
            </div>
        </div>
    </div>
}

export default LoginPage