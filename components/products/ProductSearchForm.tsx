import React from "react";

export default function ProductSearchForm() {
  return (
    <form className="flex items-center" action="">
      <input
        type="text"
        placeholder="Buscar Producto"
        className="p-2 placeholder-gray-400 w-full"
        name="search"
      />

      <input 
      type="submit" 
      className="bg-indigo-600 p-2 uppercase text-white cursor-pointer" 
      value={"Buscar"} 
      />
    </form>
  );
}
