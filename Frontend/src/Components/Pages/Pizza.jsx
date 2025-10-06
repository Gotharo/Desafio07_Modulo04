import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Pizza() {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState(null);
    useEffect(() => {
        const getPizzaProps = async () => {
            const res = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
            const data = await res.json();
            setPizza(data);
        };
        getPizzaProps();
    }, [pizzaId]);

   

    if (!pizza) {
        return <div>Cargando pizza...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col m-4 h-170 w-160 rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={pizza.img} alt={pizza.name} />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-black">{pizza.name}</h2>
                    <p className="mb-4">{pizza.desc}</p>
                    <p className="text-gray-700 text-base mb-2 font-semibold">🍕 Ingredientes:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        {pizza.ingredients && pizza.ingredients.map((ing, index) => (
                            <li key={index}> {ing}</li>
                        ))}
                    </ul>
                    <p className="text-lg font-bold text-green-700">Precio: {pizza.price}</p>
                </div>
                <div className="px-6 pt-4 pb-6 flex justify-center">
                    <button className="bg-white text-black hover:bg-blue-600 font-bold py-2 px-4 rounded m-2 border-[2px]">
                        Ver Más 👀
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2">
                        Añadir 🛒
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pizza;