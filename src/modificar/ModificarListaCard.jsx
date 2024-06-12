import { Link } from "react-router-dom";

const ModificarListaCard = ({ oblea }) => {
  const formatearNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  };

  return (
    <div className="bg-slate-400 p-2 mb-2 border-b-2 border-cyan-400 rounded-lg  ">
      <div className="grid grid-flow-col lg:grid-flow-row ">
        <div className="pl-3 ">
          <div className="grid lg:grid-cols-8 lg:place-items-center">
            <div>
              <p>Nombre</p>
            </div>

            <div>
              <p>Telefono</p>
            </div>

            <div>
              <p>Dominio</p>
            </div>

            <div>
              <p>Vehiculo</p>
            </div>

            <div>
              <p>Abonado</p>
            </div>

            <div>
              <p>Cobro</p>
            </div>

            <div>
              <p>Vencimiento</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block mt-2  ">
          <hr className="border-t-1 border-gray-800" />
        </div>

        <div className="pl-3  lg:mt-1">
          <div className="grid lg:grid-cols-8 lg:place-items-center ">
            <div>
              <p className="font-medium">
                {capitalizarPrimeraLetra(oblea.nombre)}
              </p>
            </div>

            <div>
              <p className="font-medium">{oblea.telefono}</p>
            </div>

            <div>
              <p className="font-medium">{oblea.dominio}</p>
            </div>

            <div>
              <p className="font-medium">
                {capitalizarPrimeraLetra(oblea.vehiculo)}
              </p>
            </div>

            <div>
              {oblea.pago === "sin seleccion" && (
                <p className="text-blue-500 font-semibold">Sin seleccion</p>
              )}
              {oblea.pago === "abonado" && (
                <p className="text-green-400 font-semibold">Abonado</p>
              )}
              {oblea.pago === "no-abonado" && (
                <p className="text-red-600 font-semibold">No abonado</p>
              )}
              {oblea.pago === "pago-parcial" && (
                <p className="text-amber-200 font-semibold">Pago Parcial</p>
              )}
            </div>

            <div>
              {oblea.pago === "abonado" && (
                <p className="text-green-400 font-semibold">
                  {formatearNumero(oblea.precioOblea)}
                </p>
              )}

              {oblea.pago === "pago-parcial" && (
                <p className="text-amber-200 font-semibold">
                  Debe: {formatearNumero(oblea.diferencia)}
                </p>
              )}

              {oblea.pago === "no-abonado" && (
                <p className="text-pink-700 font-semibold">
                  {formatearNumero(oblea.precioOblea)}
                </p>
              )}
            </div>

            <div>
              <p className="font-medium">{oblea.vencimiento}</p>
            </div>

            <div className="hidden lg:flex justify-center items-center ">
              <Link to={`/modificar/${oblea.id}`}>
                <button className="bg-blue-500 rounded-lg px-2 py-2 hover:bg-blue-700 transition-colors">
                  Modificar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Link to={`/modificar/${oblea.id}`}>
          <button className="bg-blue-500 rounded-lg w-full mt-2 py-2 hover:bg-blue-700 transition-colors">
            Modificar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModificarListaCard;
