import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import ObleasCartas from "./ObleasCartas";

const HeaderList = () => {
  const { listaDeObleas } = useGlobalContext();
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar las obleas segun el termino de busqueda
  const obleasFiltradas = listaDeObleas.filter((oblea) =>
    oblea.dominio.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (listaDeObleas.length === 0) {
    return (
      <div className="h-screen flex justify-center mt-20 ">
        <p className="text-white text-2xl font-bold">No hay obleas</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center mb-8 lg:justify-end">
        <div>
          <input
            type="text"
            placeholder="Buscar por dominio"
            value={busqueda}
            onChange={handleChange}
            className="py-2 px-3  outline-none rounded leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
          />
        </div>
      </div>

      {obleasFiltradas.map((oblea) => (
        <div className="p-4" key={oblea.id}>
          <ObleasCartas oblea={oblea} />
        </div>
      ))}
    </>
  );
};

export default HeaderList;
