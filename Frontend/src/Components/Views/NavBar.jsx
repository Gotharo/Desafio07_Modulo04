import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useState } from 'react';
import logo from "../../Assets/Img/Logo_gotharo.png";

function NavBar() {
    const { cart } = useCart();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formateado = total.toLocaleString('es-CL');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="w-100vw relative bg-grey-400 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img src={logo} alt="Your Company" className="h-8 w-auto" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Home </Link>

                                {isLoggedIn ? (
                                    <>
                                        <Link to="/profile" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">🔓 Profile</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">🔐 Login</Link>
                                        <Link to="/register" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">🔐 Register</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <p className="mr-2 text-white " >Token</p>
                        <input
                            type="checkbox"
                            checked={isLoggedIn}
                            onChange={(e) => setIsLoggedIn(e.target.checked)}
                            className="form-checkbox h-5 w-5 text-yellow-500"
                        />

                        <Link to="/cart" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                            🛒 Total: {formateado}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;