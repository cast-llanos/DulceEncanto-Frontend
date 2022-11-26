import axios from "axios";

const LoginServicios = {}

const URI = "https://dulce-encanto-api.herokuapp.com/api/login";
//const URI = "http://localhost:8000/api/login"
    
LoginServicios.login = (credenciales) => {
    
    return axios.post(URI, credenciales);
}

export default LoginServicios;