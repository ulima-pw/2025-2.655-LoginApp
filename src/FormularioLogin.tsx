import { useState } from "react"

const FormularioLogin = (props : FormularioLoginProps) => {
    const [ username, setUsername ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const handleUsernameOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    const handlePasswordOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input className="form-control" 
                type='text'
                value={ username }
                onChange={ handleUsernameOnChange } />
        </div>
        <div>
            <label className="form-label">Password:</label>
            <input className="form-control" 
                type='password'
                value={ password }
                onChange={ handlePasswordOnChange } />
        </div>
        <button className="btn btn-success w-100 mt-3" 
            type='button'
            onClick={ () => { props.onLogin(username, password) } }>
                Ingresar
        </button>
    </form>
}

interface FormularioLoginProps {
    onLogin : (username : string, password : string) => void
}

export default FormularioLogin