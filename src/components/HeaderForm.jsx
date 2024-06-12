import { Link } from "react-router-dom";

export const HeaderForm = () => {
  return (
    <div className=" bg-slate-950 p-3 bg-opacity-95 ">
    <Link to="/">
      <button className="bg-green-500 rounded-lg px-4 py-2 ml-2 hover:bg-green-800 transition-colors">
        Volver
      </button>
    </Link>
  </div>
  )
}

