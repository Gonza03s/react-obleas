import Header from "./components/Header";
import GlobalContext from "./context/GlobalContext";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ObleasForm from "./obleas/ObleasForm";
import Main from "./obleas/ObleasMain";
import MainModificar from './modificar/ModificarMain';
import HeaderModificar from './components/HeaderModificar'

function App() {
  const ubicacion = useLocation();
  const esRutaModificar = ubicacion.pathname.startsWith("/modificar");

  return (
    <GlobalContext>
      <div className="h-screen bg-gray-950 ">
        {esRutaModificar ? (
          <>
            <Routes>
              <Route path="/modificar/:id" element={<ObleasForm />} />
              <Route path="/modificar" element={<><HeaderModificar/> <MainModificar /></>} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<><Header /><Main /></>} />
              <Route path="/add" element={<ObleasForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </div>
    </GlobalContext>
  );
}

export default App;
