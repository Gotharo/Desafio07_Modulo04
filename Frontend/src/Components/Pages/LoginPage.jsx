import React  from "react"
import {useState} from "react"

function RegisterPage() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

     function validateEmail(email) {
        // Validación básica de email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (!validateEmail(email)) {
            alert("El correo no tiene un formato válido")
            return
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        } 

        alert("¡Enhorabuena! has logeado exitosamente")
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
                
                <button className = "border mt-5 p-1 bg-white ">Login</button>
            </form>

        </div>

    )
}

export default RegisterPage