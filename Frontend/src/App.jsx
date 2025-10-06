import NavBar from "./Components/Views/NavBar";
import Footer from "./Components/Views/Footer";
import Home from "./Components/Pages/Home";
import Cart from "./Components/Pages/Cart";
import RegisterPage from "./Components/Pages/RegisterPage";
import LoginPage from "./Components/Pages/LoginPage";
import Pizza from "./Components/Pages/Pizza";
import Profile from "./Components/Views/Profile";
import NotFound from "./Components/Views/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <div className="min-h-screen flex flex-col">
                    <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
                        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
                        <Route path="/pizza/:pizzaId" element={<Pizza />} />
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                        <Footer />
                    </BrowserRouter>
                </div>
            </CartProvider>
        </UserProvider>
    );
}

export default App

