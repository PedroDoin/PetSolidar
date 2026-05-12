import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import NovaSenha from "./pages/NovaSenha";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/recuperar"
          element={<RecuperarSenha />}
        />

        <Route
          path="/nova-senha"
          element={<NovaSenha />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;