import React from "react";
import HeaderList from "./ObleasLista";

const Main = () => {
  return (
    <div className="">

      <div className="bg-gray-950">

        <div className="flex justify-center items-center  mb-10">
          <h1 className="text-2xl text-blue-500 font-semibold pt-32 underline tracking-wide lg:text-3xl ">
            Gestion de Obleas de GNC
          </h1>
        </div>

        <div className="custom:w-[400px] lg:w-11/12 m-auto   ">
          <HeaderList />
        </div>
        
      </div>

    </div>
  );
};

export default Main;
