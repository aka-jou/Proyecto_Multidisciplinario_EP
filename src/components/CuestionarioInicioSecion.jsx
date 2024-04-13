import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/CuestionarioInicioSecion.css";

function CuestionarioIniciSecion() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const handleIniciarSesion = () => {
    
    if (!usuario || !contrasena) {
      alert("Debes completar todos los campos");
      return;
    }

   
    if (usuario === "usuario" && contrasena === "contrasena") {
     
      navigate("/categories");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="CuestionarioIniciSecion">
      <h1 className="tituloIS">Inicio de sesión</h1>
      <input
      className="InputIniciSecion"
        type="text"
        placeholder="Usuario"
        nombre="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
      className="InputIniciSecion"
        type="password"
        placeholder="Contraseña"
        nombre="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <button className="botonis" onClick={handleIniciarSesion}>
        Iniciar sesión 
      </button>
      <Link to="/register">
        <p>¿No tienes cuenta? Crea una</p>
      </Link>
    </div>
  );
}

export default CuestionarioIniciSecion;
