import { NuevoUsuario } from "./components/nuevoUsuario";
import { Error } from "./components/error";
import { Inicio } from "./components/inicio";
import { Entrar } from "./components/entrar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./rutas/PrivateRoute";
import PublicRoute from "./rutas/PublicRoute";

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error />}></Route>
            <Route path="/" element={<PrivateRoute> <Inicio /> </PrivateRoute>}></Route>
            <Route path="/entrar" element={<PublicRoute> <Entrar /> </PublicRoute>}></Route>
            <Route path="/nuevoUsuario" element={<PublicRoute> <NuevoUsuario /> </PublicRoute>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default AppRouter;
