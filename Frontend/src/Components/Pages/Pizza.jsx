import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useCart } from '../../Context/CartContext';
import { v4 as uuidv4 } from 'uuid';

function Pizza() {
    const { pizzaId } = useParams();
    const { cart, addToCart } = useCart();
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);
    const localId = useRef(uuidv4());
    
    useEffect(() => {
        const getPizzaProps = async () => {
            try {
                setLoading(true);
                console.log('Pizza ID obtenido:', pizzaId); // Debug
                const url = `http://localhost:5000/api/pizzas/${pizzaId}`;
                console.log('URL de petición:', url); // Debug
                const res = await fetch(url);
                console.log('Respuesta del servidor:', res.status); // Debug
                if (!res.ok) {
                    throw new Error(`Pizza no encontrada (Status: ${res.status})`);
                }
                const data = await res.json();
                console.log('Datos recibidos:', data); // Debug
                setPizza(data);
            } catch (err) {
                console.error('Error al cargar pizza:', err); // Debug
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getPizzaProps();
    }, [pizzaId]);

    // Verificar si la pizza ya está en el carrito
    useEffect(() => {
        if (pizza) {
            // Buscar por ID de pizza para evitar duplicados entre CardPizza y Pizza
            const exists = cart.some(item => item.id === pizza.id);
            setAdded(exists);
        }
    }, [cart, pizza]);

    // Función para agregar al carrito
    const handleAdd = () => {
        if (!added && pizza) {
            addToCart({ 
                ...pizza, 
                cartId: `${pizza.id}-${Date.now()}` // ID único pero basado en la pizza
            });
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen text-white">Cargando pizza...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
    }

    if (!pizza) {
        return <div className="flex items-center justify-center min-h-screen text-white">Pizza no encontrada</div>;
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
                    <button 
                        className={
                            added
                                ? "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
                                : "bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded m-2"
                        }
                        onClick={handleAdd}
                        disabled={added}
                    >
                        {added ? "Añadido 🍕" : "Añadir 🛒"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pizza;