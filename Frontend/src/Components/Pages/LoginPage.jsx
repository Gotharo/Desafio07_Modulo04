import React from "react"
import { useState } from "react"
import { useUser } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const { login } = useUser();
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

     function validateEmail(email) {
        // Validación básica de email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    async function handleSubmit(event) {
        event.preventDefault()

        if (!validateEmail(email)) {
            alert("El correo no tiene un formato válido")
            return
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }

        setLoading(true);
        const result = await login(email, password);
        setLoading(false);

        if (result.success) {
            alert("¡Enhorabuena! has logeado exitosamente")
            navigate('/');
        } else {
            alert(`Error: ${result.error}`);
        }
    }


    return(
        <div className = " mt-20 flex flex-col  mx-auto p-20 max-w-[800px]">
            <h2 className = "text-white text-xl mb-5 ">LOGIN</h2>
            <form onSubmit={handleSubmit}  className = "flex flex-col gap-2">
                <input 
                id = "email"
                className = "border px-2 bg-white text-black"                
                type="text" 
                placeholder="Email"
                value={email}
                onChange={ (e) => {setEmail(e.target.value)}}
                />
                <input
                id= "password" 
                className = "border px-2 bg-white text-black"
                type="text" 
                placeholder="Ingrese su Contraseña"
                value={password}
                onChange={ (e) => {setPassword(e.target.value)}}
                minLength={6}
                
                />
                
                <button 
                    className="border mt-5 p-1 bg-white" 
                    disabled={loading}
                >
                    {loading ? 'Ingresando...' : 'Login'}
                </button>
            </form>

        </div>

    )
}

export default RegisterPage