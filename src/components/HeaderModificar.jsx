import React from "react";
import { Link } from "react-router-dom";

const HeaderModificar = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full fixed top-0 left-0 right-0">
          <div className="flex justify-start items-end p-3 bg-slate-950  ">
            <Link to="/">
              <button className="bg-green-500 rounded-lg px-4 py-2 ml-2 hover:bg-green-800 transition-colors">
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderModificar;
