import NavBar from "./Components/Views/NavBar";
import Footer from "./Components/Views/Footer";
import Home from "./Components/Pages/Home";
import Cart from "./Components/Pages/Cart";
import RegisterPage from "./Components/Pages/RegisterPage";
import LoginPage from "./Components/Pages/LoginPage";
import Pizza from "./Components/Pages/Pizza";
import Profile from "./Components/Views/Profile";
import NotFound from "./Components/Views/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen flex flex-col">
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/pizza/:pizzaId" element={<Pizza />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </CartProvider>
    );
}

export default App

