import CardPizza from "../Views/CardPizza"
import Header from "../Views/Header"
import { useState, useEffect } from "react";


function Home() {

    const [pizzas, setPizzas] = useState([])

    async function getPizzas() {
        const res = await fetch("http://localhost:5000/api/pizzas")
        const data = await res.json()
        setPizzas(data)
    }
    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <div>
            <Header />
            <div className="grid grid-cols-3 gap-6 justify-items-center">

                {pizzas.map((pizza) => {
                    return (
                        
                        <CardPizza
                            key={pizza.id}
                            id={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            desc={pizza.desc}
                        />
                        
                    )
                })}
            </div>
        </div>
    );
}

export default Home;
