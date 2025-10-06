function Header() {
    return (
        <div className = "relative flex justify-center items-center"> 
            <img className="bg-black opacity-33 w-full h-50 object-cover" src="./src/Assets/Img/Header.jpg" alt="" />
            <h1 className = "absolute top-1/4 text-4xl font-bold text-white">¡Pizzería Papá Mioo!</h1>
            <p className = "absolute top-1/2 text-white">¡Tenemos las mejoras pizzas como hechas por tu Papá!</p>
        </div>              
        
    )
}

export default Header