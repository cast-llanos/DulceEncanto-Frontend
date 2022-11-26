import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import logo from "../../imgs/logo-3.png";
import EstadoLogin from "../../enums/EstadoLogin";
import LoginServicios from "../../servicios/LoginServicios";
import { ContextoUsuario } from "./ContextoUsuario";

const Login = () => {
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [username, setUsername] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [recordar, setRecordar] = useState(false);
  const { usuario, setUsuario } = useContext(ContextoUsuario);

  const crearSesion = (datosPerfil) => {

    sessionStorage.setItem("nombres", datosPerfil.nombres);
    sessionStorage.setItem("username", datosPerfil.username);
    sessionStorage.setItem("estadologin", datosPerfil.estadologin);
    setUsuario(datosPerfil);
  };

  const validar = async (event) => {

    event.preventDefault();
    try {

      const credenciales = {
        email: email,
        password: passw,
        username: username

      };

      const result = await LoginServicios.login(credenciales);
      console.log(result);

      const datosPerfil = {
        nombres: result.data.nombres,
        username: result.data.username,
        estadologin: EstadoLogin.ADMIN
      };

      crearSesion(datosPerfil);
      navigateTo("/");

      /*
      if (datosPerfil.estadologin === EstadoLogin.ADMIN) {
        //CAMBIAR
        navigateTo("/dashboard");
      } else {
        navigateTo("/");
      }
      */
      
    } catch (error) {
        //console.log(error);
        if (error.response.status === 401) {
        setMensaje(error.response.data);
      }
    }
  };

  const cambiarEmail = (event) => {

    setEmail(event.target.value);
    setUsername(null);
    setMensaje("");
  };

  const cambiarUsername = (event) => {

    setUsername(event.target.value);
    setEmail(null);
    setMensaje("");
  };

  const cambiarPassw = (event) => {
    setPassw(event.target.value);
    setMensaje("");
  };

  const cambiarRecordar = (event) => {
    setRecordar(event.target.checked);
  };

  const emailFocus = () =>{
    document.getElementById("username").disabled = "true";
  }

  const usernameFocus = () =>{
    document.getElementById("email").disabled = "true";
  }

  return (
    <form
      onSubmit={validar}
      className="card shadow w-100 m-auto"
      style={{ maxWidth: "600px", padding: "15px" }}
    >
      <h3 className="h3 mb-3 text-center">Credenciales</h3>
      <div className="row mb-2">
        <label htmlFor="email" className="form-control-sm col-3">
          Email
        </label>
        <div className="col-9">
          <input
            type="email"
            className="form-control form-control-sm col-8"
            onChange={cambiarEmail}
            onClick={emailFocus}
            value={email}
            id="email"
            name="email"
            placeholder="nombre@ejemplo.com"
            required
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="username" className="form-control-sm col-3">
          Usuario
        </label>
        <div className="col-9">
          <input
            type="email"
            className="form-control form-control-sm col-8"
            onChange={cambiarUsername}
            onClick={usernameFocus}
            value={username}
            id="username"
            name="username"
            placeholder="username"
            required
          />
        </div>
      </div>
      <div className="row mb-2">
        <label htmlFor="passw" className="form-control-sm col-3">
          Contraseña
        </label>
        <div className="col-9">
          <input
            type="password"
            className="form-control form-control-sm"
            onChange={cambiarPassw}
            value={passw}
            id="passw"
            name="passw"
            placeholder="Contraseña"
            required
          />
        </div>
      </div>
      <div className="checkbox mb-3">
        <label className="form-control-sm">
          <input
            className=""
            type="checkbox"
            onChange={cambiarRecordar}
            checked={recordar}
          />{" "}
          Recordar contraseña
        </label>
      </div>
      <button 
      className="btn btn-primary me-2" 
      type="submit"
      onClick={validar}
      >
        Ingresar
      </button>
      <a href="/" className="btn btn-light me-2" type="submit">
        Cancelar
      </a>{" "}
      {mensaje}
    </form>
  );
};

export default Login;
