import { useContext, createContext, useReducer, useEffect } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  obleas: []
};

const contexto = createContext();

export const useGlobalContext = () => {
  return useContext(contexto);
}

const GlobalContext = ({ children }) => {

  const obleasGuardadas = localStorage.getItem("obleas");

  let obleasIniciales;
  try {
    obleasIniciales = obleasGuardadas ? JSON.parse(obleasGuardadas) : initialState;
    if (!obleasIniciales.obleas) {
      obleasIniciales.obleas = [];
    }
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    obleasIniciales = initialState;
  }

  const [obleasState, dispatch] = useReducer(AppReducer, obleasIniciales);

  useEffect(() => {
    localStorage.setItem("obleas", JSON.stringify(obleasState));
  }, [obleasState]);

  const crearOblea = (datosInput) => {
    dispatch({
      type: "[ABM AltaDeOblea]",
      payload: { ...datosInput, id: crypto.randomUUID() }
    });
  }

  const eliminarOblea = (id) => {
    dispatch({
      type: "[ABM BajaOblea]",
      payload: id
    })
  }

  const actualizarOblea = (oblea) => {
    dispatch({
      type: "[ABM ModificarOblea]",
      payload: oblea
    })
  }


  return (
    <contexto.Provider value={{ listaDeObleas: obleasState.obleas, crearOblea, eliminarOblea, actualizarOblea }}>
      {children}
    </contexto.Provider>
  )
}

export default GlobalContext;
