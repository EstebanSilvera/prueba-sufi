import React, { useState } from 'react'
import sufi from "../img/sufi.png"
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { FaArrowRightToBracket, FaRegCalendarDays } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowDown, MdCancel } from 'react-icons/md'
import { TfiDownload } from 'react-icons/tfi'
import { saveAs } from 'file-saver';

const salir = () => {

    let confirmar = window.confirm("¿Quieres continuar?");

    if (confirmar) {
        window.location.href = "/";
    } else {
        alert("Presionaste 'No'");
    }
}

const cerrar = () => {
    let div = document.getElementById("miDiv")
    document.getElementById("toggleButton").addEventListener("click", function () {
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}

const Desembolso = () => {

    const [pagination, setPagination] = useState(1)

    const [tabla, setTabla] = useState([
        { fecha: "00-00-0000 00:00:00", desembolso: '00000000', tdoc: "Cédula", documento: "0000000000", monto: "$000.000.000" },
        { fecha: "00-00-0000 00:00:00", desembolso: '00000000', tdoc: "Cédula", documento: "0000000000", monto: "$000.000.000" },
        { fecha: "00-00-0000 00:00:00", desembolso: '00000000', tdoc: "Cédula", documento: "0000000000", monto: "$000.000.000" },
    ]);

    const agregarCampo = () => {
        const nuevoCampo = { fecha: "00-00-0000 00:00:00", desembolso: '00000000', tdoc: "Cédula", documento: "0000000000", monto: "$000.000.000" };
        setTabla([...tabla, nuevoCampo]);
    };


    const descargarComoTexto = () => {
        const contenido = JSON.stringify(tabla, null, 2);
        const blob = new Blob([contenido], { type: 'text/plain' }); 
        saveAs(blob, 'datos.txt');
      };

    console.log(tabla)

    return (
        <div>

            <div className='desembolso'>

                <div className='nav-desembolso'>

                    <img style={{ marginLeft: "61vh" }} className='sufi-desembolso' src={sufi} alt='' />

                    <Button onClick={() => salir()}
                        style={{
                            marginLeft: "auto",
                            background: "transparent",
                            borderColor: "transparent",
                            fontFamily: "Arial, Open Sans",
                            paddingRight: "2vh",
                            fontSize: "14px",
                            fontWeight: "bold",
                            color: "#31323F"
                        }}>
                        Cerrar sesión
                    </Button>
                    <div style={{ paddingRight: "3vh" }}>
                        <FaArrowRightToBracket style={{ width: "24px", height: "24px" }} />
                    </div>
                </div>

                <div className='nav-descargar'>

                    <p style={{ fontSize: "20px", fontFamily: "Arial, Open Sans", fontWeight: "bold", color: "#413E4D", marginLeft: "4vh", padding: "1vw" }}>
                        Mis desembolsos
                    </p>
                    <TfiDownload style={{ position: "relative", width: "20px", height: "22px", color: "white", top: "0.8em", left: "25.8em", pointerEvents: "none" }} />
                    <Button onClick={() => descargarComoTexto()} style={{ marginRight: "5vh", width: "174px", height: "48px", borderRadius: " 24px", fontFamily: "Arial, Open Sans", fontSize: "14px", fontWeight: "bold" }} variant="danger" type="submit">
                        Descargar
                    </Button>
                </div>

                <div className='nav-checkbox'>

                    <select className='check' style={{ width: "176px", height: "56px", appearance: "none", color: "#ABB9C7" }} >
                        <option >Tipo doc.</option>
                        <option value="1">Cedula</option>
                        <option value="2">Pasaporte</option>
                        <option value="3">T. Identidad</option>
                    </select>

                    <input className='check' style={{ width: "272px", height: "56px" }} placeholder="Número de documento" />

                    <input className='check' style={{ width: "272px", height: "56px" }} placeholder="Número de desembolso" />
                    <input className='check' style={{ width: "172px", height: "56px" }} placeholder="Desde" />
                    <input onClick={() => agregarCampo()} className='check' style={{ width: "172px", height: "56px" }} placeholder="Hasta" />

                </div>

                <div className='scroll-tabla'>

                    <table className='mi-tabla' >
                        <thead>
                            <tr style={{ height: "48px", background: "#F1F6FB" }}>
                                <th className='letras' style={{ paddingLeft: "4vw", width: "276", height: "16" }}>Fecha y hora</th>
                                <th className='letras' style={{ width: "240", height: "16" }}>Número de desembolso</th>
                                <th className='letras' style={{ width: "236", height: "16" }} >Tipo de documento</th>
                                <th className='letras' style={{ width: "256", height: "16" }} >Número de documento</th>
                                <th className='letras' style={{ paddingRight: "4vw", width: "176", height: "16" }}>Monto</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                tabla.map((p) => (
                                    <tr style={{ height: "48px", color: "#8E8E8E", fontSize: "14px" }}>
                                        <td style={{ paddingLeft: "4vw" }}>{p.fecha}</td>
                                        <td>{p.desembolso}</td>
                                        <td>{p.tdoc}</td>
                                        <td>{p.documento}</td>
                                        <td style={{ fontWeight: "bold" }}>{p.monto}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                </div>


                {/*############################################### PAGINAS CON POSITION RELATIVE ############################################### */}

                <div className='paginacion'>

                    <div className='numeroPaginacion'>
                        <div style={{ padding: "10px" }}>
                            <MdOutlineKeyboardArrowLeft onClick={() => (pagination === 1) ? setPagination(1) : setPagination(pagination - 1)} style={{ color: "#DD3542", width: "24px", height: "24px" }} />
                        </div>

                        <div style={{ width: "48px", height: "48px", border: "1px solid #ABB9C780", borderRadius: "6px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {pagination}
                        </div>

                        <p style={{ fontSize: "16px", margin: "0", padding: "10px", font: "arial, Lato", color: "#414141", fontWeight: "Regular" }}>de 10</p>

                        <div style={{ padding: "10px" }}>
                            <MdOutlineKeyboardArrowRight onClick={() => (pagination === 10) ? setPagination(10) : setPagination(pagination + 1)} style={{ color: "#DD3542", width: "24px", height: "24px" }} />
                        </div>
                    </div>

                    <div className='checkPaginacion'>
                        <FloatingLabel label="Registros por página">
                            <Form.Select style={{ width: "268px", height: "56px" }}>
                                <option>16</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                </div>

                <MdOutlineKeyboardArrowDown style={{ position: "relative", top: "-43em", left: "13em", color: "#DD3542", width: "24px", height: "24px", pointerEvents: "none" }} />
                <FaRegCalendarDays style={{ position: "relative", top: "-43em", left: "59em", color: "#DD3542", width: "24px", height: "24px", pointerEvents: "none" }} />
                <FaRegCalendarDays style={{ position: "relative", top: "-43em", left: "69.6em", color: "#DD3542", width: "24px", height: "24px", pointerEvents: "none" }} />


                <div id="miDiv" class="hiddenDiv" className='mensaje'>

                    <p style={{ fontSize: "14px", margin: "0", fontFamily: "Arial, Open Sans", color: "#413E4D", width: "180px" }}>
                        Pedro Pérez ha hecho <br />una compra por valor de <br /> <div style={{ color: "#413E4D", fontFamily: "Arial, Open Sans", fontWeight: "bold" }}>$1.800.000</div>
                    </p>

                    <div onClick={() => cerrar()} id="toggleButton" style={{ pointerEvents: "auto" }}>
                        <MdCancel style={{ position: "relative", color: "#DD3542", width: "24px", height: "24px", top: "-3.2em", left: "1.5em" }} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Desembolso