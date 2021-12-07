import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../helpers/url';
import '../styles/Form.css';

export const Form = () => {

    const [deportista, setDeportista] = useState({
        nombre: '',
        tipo: '',
        deporte: '',
        correo: '',
        edad: ''
    })
    
    const {nombre,deporte,correo,edad, imagen} = deportista

    const handleChange = ({ target }) => {
        setDeportista({
            ...deportista,
            [target.name]: target.value
        })
        console.log(deportista);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const postData = () => {
        axios.post(url, deportista)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }


    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Deportistas</h2>
           <hr/>
           <div className="color_1">
               <div>
                   <label>Nombre Completo</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange}/>
               </div>
               <div>
                   <label>Genero</label>
                   <select id="selectTipo" name="tipo">
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="Masculono" value="Masculino">Masculino</option>
                       <option name="Femenino" value="Femenino">Femenino</option>
                   </select>
               </div>
               </div>
               <div className="inputs">
               <div>
                   <label>Deporte que juega</label>
                   <input id="inputDeporte" type="text" name="deporte" value={deporte} onChange={handleChange}/>
               </div>
               <div>
                   <label>Correo</label>
                   <input id="inputCorreo" type="email" name="correo" value={correo} onChange={handleChange}/>
               </div>
               <div>
                   <label>Teléfono</label>
                   <input id="inputEdad" type="number" name="edad" value={edad} onChange={handleChange}/>
               </div>
               <div>
                   <label>imagen</label>
                   <input id="inputImagen" type="url" name="imagen" value={imagen} onChange={handleChange}/>
               </div>
               <div>
                   <button id="btnRegistro" onClick={postData}>Enviar</button> 
               </div>
               </div>
           </form>
        </div>
    )
}
