import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles.css";
import { HeaderForm } from "../components/HeaderForm";

const ObleasForm = () => {
  const { crearOblea, listaDeObleas, actualizarOblea } = useGlobalContext();
  const params = useParams();
  const [aviso, setAviso] = useState(false);
  const [datos, setDatos] = useState({
    id: "",
    nombre: "",
    telefono: "",
    dominio: "",
    vehiculo: "",
    precioOblea: "",
    pago: "",
    vencimiento: "",
    montoAbonado: "",
    diferencia: "",
  });

    // const guardarDatos = (e) => {
  //   const { name, value } = e.target;

  //   setDatos((datosAnteriores) => ({
  //     ...datosAnteriores,
  //     [name]: value,
  //   }));
  //   //funcion que actualiza el estado datos con el valor introducido en el input correspondiente mediante su name.
  // };


  // Función para formatear el número con puntos separadores de miles
  const formatearNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Función para eliminar los separadores de miles
  const eliminarSeparadoresMiles = (numero) => {
    if (typeof numero === "string") {
      return parseFloat(numero.replace(/\./g, ""));
    }
    return numero;
  };

  const guardarDatos = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "precioOblea" || name === "montoAbonado") {
      formattedValue = formatearNumero(parseFloat(value.replace(/\./g, "")) || 0);
    }

    setDatos((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: formattedValue,
    }));
  };

  const envioForm = (event) => {
    event.preventDefault();

    setAviso(true);
    setTimeout(() => {
      setAviso(false);
    }, 2000);

    const precioObleaActual = eliminarSeparadoresMiles(datos.precioOblea);
    const montoAbonado = eliminarSeparadoresMiles(datos.montoAbonado);

    let diferencia = "";

    if (
      datos.pago === "pago-parcial" &&
      !isNaN(precioObleaActual) &&
      !isNaN(montoAbonado)
    ) {
      diferencia = precioObleaActual - montoAbonado;
    }

    const datosAEnviar = {
      ...datos,
      precioOblea: precioObleaActual,
      montoAbonado: montoAbonado,
      diferencia,
    };


    if (datos.id) {
      actualizarOblea(datosAEnviar);
    } else {
      crearOblea(datosAEnviar);
    }

    setDatos({
      id: "",
      nombre: "",
      telefono: "",
      dominio: "",
      vehiculo: "",
      precioOblea: "",
      pago: "",
      vencimiento: "",
      montoAbonado: "",
      diferencia: "",
    });
  };

  useEffect(() => {
    const relacionIdListaConUrl = listaDeObleas.find(
      (oblea) => oblea.id === params.id
    );

    if (relacionIdListaConUrl) {
      setDatos({
        ...relacionIdListaConUrl,
        precioOblea: formatearNumero(relacionIdListaConUrl.precioOblea),
        montoAbonado: formatearNumero(relacionIdListaConUrl.montoAbonado),
      });
    }
  }, [params.id, listaDeObleas]);

  return (
    <div>
      <HeaderForm />

      <div className="bg-gray-950 p-2">
        <div className={`fade-out ${aviso ? "opacityTrue" : "opacityFalse"}`}>
          <p className="text-fuchsia-800 text-2xl flex justify-center">
            Oblea cargada exitosamente
          </p>
        </div>

        <div className="flex justify-center items-center basis-full  ">
          <form onSubmit={envioForm}>
            <div
              className="bg-gray-800 p-7 flex flex-col justify-center items-center rounded-xl
            sm:px-36 md:px-40 h-full w-full  "
            >
              <div className="mb-7">
                <h1 className="text-center text-2xl text-blue-500 font-semibold tracking-wide underline">
                  {datos.id ? "Modificar oblea" : "Ingrese nueva oblea"}
                </h1>
              </div>

              <div className="mb-5 w-full">
                <label htmlFor="name" className="font-semibold text-white">
                  Nombre:
                </label>
                <br />
                <input
                  required
                  id="name"
                  name="nombre"
                  value={datos.nombre}
                  onChange={guardarDatos}
                  type="text"
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                />
              </div>

              <div className="mb-5 w-full">
                <label htmlFor="phone" className="font-semibold text-white ">
                  Telefono:
                </label>
                <br />
                <input
                  required
                  id="phone"
                  name="telefono"
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                  value={datos.telefono}
                  onChange={guardarDatos}
                  type="number"
                />
              </div>

              <div className="mb-5 w-full">
                <label htmlFor="patente" className="font-semibold text-white ">
                  Dominio:
                </label>
                <br />
                <input
                  required
                  id="patente"
                  name="dominio"
                  value={datos.dominio}
                  onChange={guardarDatos}
                  type="text"
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                />
              </div>

              <div className="mb-5 w-full">
                <label htmlFor="car" className="font-semibold text-white">
                  Vehiculo:
                </label>
                <br />
                <input
                  required
                  id="car"
                  name="vehiculo"
                  value={datos.vehiculo}
                  onChange={guardarDatos}
                  type="text"
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                />
              </div>

              <div className="mb-5 w-full">
                <label
                  htmlFor="precioOblea"
                  className="font-semibold text-white"
                >
                  Precio oblea actual:
                </label>
                <br />
                <input
                  required
                  id="precioOblea"
                  name="precioOblea"
                  value={datos.precioOblea}
                  onChange={guardarDatos}
                  type="text" // Cambiado de "number" a "text" para permitir el formateo de miles
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                />
              </div>

              <div className="mb-5 w-full">
                <label htmlFor="abonado" className="font-semibold text-white">
                  Estado de Pago:
                </label>
                <br />
                <select
                  required
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                  value={datos.pago}
                  onChange={guardarDatos}
                  name="pago"
                  id="abonado"
                >
                  <option value="sin seleccion">Seleccione una opción</option>
                  <option value="abonado">Abonado</option>
                  <option value="no-abonado">No Abonado</option>
                  <option value="pago-parcial">Pago Parcial</option>
                </select>
              </div>

              {datos.pago === "pago-parcial" && (
                <div className="mb-5 w-full">
                  <label
                    htmlFor="montoPago"
                    className="font-semibold text-white"
                  >
                    Monto pago:
                    <br />
                  </label>
                  <input
                    required
                    onChange={guardarDatos}
                    value={datos.montoAbonado}
                    name="montoAbonado"
                    id="montoPago"
                    className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text" // Cambiado de "number" a "text" para permitir el formateo de miles
                  />
                </div>
              )}

              <div className="mb-5 w-full">
                <label htmlFor="caducidad" className="font-semibold text-white">
                  Vencimiento:
                </label>
                <br />
                <input
                  required
                  id="caducidad"
                  className="py-2 px-3 outline-none rounded w-full leading-tight bg-gray-100 border-2 border-gray-100 
                  focus:outline-none focus:bg-white focus:border-indigo-500"
                  value={datos.vencimiento}
                  onChange={guardarDatos}
                  name="vencimiento"
                  type="date"
                />
              </div>

              <button
                className="bg-cyan-700 px-4 py-2 rounded-lg hover:bg-cyan-900 transition-colors active:bg-cyan-950 text-white font-medium"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ObleasForm;
