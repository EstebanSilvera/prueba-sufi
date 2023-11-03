import React from 'react'
import './style/style.css';
import sufi from "../img/sufi.png"
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import punto from "../img/197.png"
import fondo from "../img/32966.png"
import fondo2 from "../img/32967.png"
import ochoPuntos from "../img/36052.png"

const Sesion = () => {

  const user = document.getElementById("user").value
  const password = document.getElementById("password").value

  console.log(user, password)

  if (user !== "" && password !== "") {
    window.location.href = "/Desembolso"
  } else {
    alert("Contraseña o correo incorrecto")
  }

}

const Login = () => {
  return (
    <div >

      <div className='login' style={{backgroundImage:`url(${fondo})`, overflow:"hidden"}}>

        <div className='form'>

          <img className='sufi' src={sufi} alt='' />

          <p style={{ color: "#413E4D", fontFamily: "Arial, Open Sans", margin: "0", fontSize: "40px", fontWeight: "bold", marginTop: "0.5vw" }}>Sufipay</p>

          <p style={{ color: "#413E4D", fontFamily: "Arial, Open Sans" }}>Administrador comercial</p>

          <div className='email'>
            <FloatingLabel style={{ marginBottom: "1vw", height: "56px" }} label="Usuario" >
              <Form.Control type="email" placeholder="name@example.com" id='user' />
            </FloatingLabel>
            <FloatingLabel label="Contraseña">
              <Form.Control type="password" placeholder="Contraseña" id="password" />
            </FloatingLabel>
            <Button onClick={() => Sesion()} style={{ marginTop: "2svw", width: "174px", height: "48px", borderRadius: " 24px", fontFamily: "Arial, Open Sans", fontSize: "16px", fontWeight: "bold" }} variant="danger" type="submit">
              INGRESAR
            </Button>
          </div>
          <div style={{ marginTop: "5.4vw", fontSize: "12px", fontFamily: "Arial, Open Sans", color: "#413E4D", fontWeight: "bold" }}>
            <u>No recuerdo mi contraseña</u>
          </div>

        </div>

        {/* <div className='position-fondo'>
          <img className='fondo' src={fondo} alt='' />
        </div> */}

        <div>
          <img className='ochopuntos' src={ochoPuntos} alt='' />

          <img className='ochopuntos2' src={ochoPuntos} alt='' />
        </div>

        {/* <div className='position-fondo2'>
          <img className='fondo' src={fondo} alt='' />
        </div> */}

        <div>
          <img className='puntos' src={punto} alt='' />

          <img className='puntos2' src={punto} alt='' />
        </div>

      </div>
    </div>
  )
}

export default Login