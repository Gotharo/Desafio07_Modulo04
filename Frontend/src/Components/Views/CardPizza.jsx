

import { useCart } from '../../Context/CartContext';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function CardPizza({ id, name, price, ingredients, img, desc }) {
    const { cart, addToCart } = useCart();
    const pizza = { id, name, price, ingredients, img, desc };
    const localId = useRef(uuidv4());
    const [added, setAdded] = useState(false);

        useEffect(() => {
            // Buscar por ID de pizza para detectar si ya existe (desde cualquier componente)
            const exists = cart.some(item => item.id === id);
            setAdded(exists);
        }, [cart, id]);

        const handleAdd = () => {
            if (!added) {
                addToCart({ 
                    ...pizza, 
                    cartId: `${id}-${Date.now()}` // ID único pero basado en la pizza
                });
            }
        };

    return (
        <div className="flex">
            <div className="flex flex-col m-4 rounded overflow-hidden shadow-lg bg-white h-auto min-h-0 justify-between max-w-[420px] w-full" style={{height: 'auto', maxWidth: '420px'}}>
                <img className="w-full h-48 object-cover" src={img} alt={name} />
                <div className="px-6 py-4 flex-1">
                    <h2 className="font-bold text-xl mb-2 text-black">{name}</h2>
                    <p className="mb-4 text-xs">{desc}</p>
                    <p className="text-gray-700 text-base mb-2 font-semibold">🍕 Ingredientes:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        {ingredients.map((ing, index) => (
                            <li key={index}> {ing}</li>
                        ))}
                    </ul>
                    <p className="text-lg font-bold text-green-700">Precio: {price}</p>
                </div>
                <div className="px-6 pb-4 flex justify-center mt-auto">
                    <Link 
                        to={`/pizza/${id}`}
                        className="bg-white text-black hover:bg-blue-600 font-bold py-2 px-4 rounded m-2 border-[2px] text-center no-underline"
                    >
                        Ver Más 👀
                    </Link>
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

export default CardPizza