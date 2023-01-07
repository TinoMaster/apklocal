import { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/inicio Session/pagInicioSession";
import { Layout } from "./components/layout";
import AuthContext, { AuthProvider } from "./context/authContext";

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {!isAuth ? (
            <Route path="*" element={<Login />} />
          ) : (
            <Route path="*" element={<Layout />} />
          )}
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
