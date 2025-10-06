import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/436")
      .then(res => res.json())
      .then(data => {
        if (data && data.image) setImage(data.image);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {image && (
        <img src={image} alt="Rick Sanchez" className="h-100 w-100 object-contain mb-6 rounded-full border-4 border-green-400" />
      )}
      <Link to="/">
        <h2 className="text-2xl font-bold text-center text-gray-700 transition-colors duration-200 hover:text-white cursor-pointer">
          Plop esa pizza no esta Compa!
        </h2>
      </Link>
    </div>
  );
}

export default NotFound;
