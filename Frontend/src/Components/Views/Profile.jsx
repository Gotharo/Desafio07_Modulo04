import React from "react";
import logo from "../../Assets/Img/Logo_gotharo.png";

function Profile() {
  // Simulación de usuario
  const userEmail = "gonzalo.castro@gotharo.cl";

  const handleLogout = () => {
    // Aquí iría la lógica real de logout
    alert("Sesión cerrada");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Perfil de Usuario</h2>
        <img src={logo} alt="Logo Gotharo" className="h-50 w-50 object-contain mb-4" />
        <p className="mb-6 text-center text-gray-700">Email: <span className="font-semibold">{userEmail}</span></p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Profile;
