import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative">

      <div className="w-full fixed top-0 left-0 right-0">

        <div className="flex justify-between items-end p-3 bg-slate-950  ">
          <Link to="/modificar">
            <button className="bg-indigo-400 rounded-md px-2 py-2 hover:bg-indigo-700 transition-colors">
              ~Modificar
            </button>
          </Link>

          <Link to="/add">
            <button
              className="bg-green-500 rounded-md px-2 py-2  hover:bg-green-800 
            transition-colors"
            >
              +Nueva oblea
            </button>
          </Link>
        </div>

      </div>
      
    </div>
  );
};

export default Header;
