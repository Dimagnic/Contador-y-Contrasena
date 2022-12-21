import React, { useState } from "react";
import App from "../App.css";

const Contrasena = () => {


    const [isVisible, setisVisible] = useState(false)

    const changeVisible = () => {
        setisVisible(!isVisible)
    }


    return (

        <div className="App" style={{ background: isVisible ? "green" : "gray" }}>
            <input type={isVisible ? 'text' : 'password'} />
            <button onClick={changeVisible}>{isVisible ? "ocultar" : "mostrar"}</button>
        </div>
    )
};

export default Contrasena;