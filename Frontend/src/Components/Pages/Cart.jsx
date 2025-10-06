import { useCart } from '../../Context/CartContext';

function Cart() {
    const { cart, updateQuantity } = useCart();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto bg-white rounded shadow p-6 mt-8">
            <h2 className="font-bold text-lg mb-4">Detalles del pedido:</h2>
            <div>
                {cart.length === 0 ? (
                    <p className="text-gray-500">El carrito está vacío.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.cartId} className="flex items-center mb-4">
                            <img src={item.img} alt={item.name} className="w-12 h-12 rounded mr-3" />
                            <span className="flex-1 font-medium">{item.name}</span>
                            <span className="w-24 text-right font-semibold">${item.price.toLocaleString()}</span>
                            <button
                                className="border-2 border-red-400 text-red-500 px-2 mx-2 rounded"
                                onClick={() => updateQuantity(item.cartId, -1)}
                            >-</button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <button
                                className="border-2 border-blue-400 text-blue-500 px-2 mx-2 rounded"
                                onClick={() => updateQuantity(item.cartId, 1)}
                            >+</button>
                        </div>
                    ))
                )}
            </div>
            <div className="font-bold text-xl mt-6 mb-4">
                Total: ${total.toLocaleString()}
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">Pagar</button>
        </div>
    );
}

export default Cart;