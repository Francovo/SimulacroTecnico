import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../helpers/url';
import '../styles/List.css';

export const List = () => {
    
    const [deportista, setDeportista] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        axios.get(url)
        .then(response => {
            setDeportista(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const dataDelete = (id) => {
        axios.delete(url + id)
        .then(response => {
            getData()
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
 
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre Completo</th>
                    <th>Genero</th>
                    <th>Deporte que juega</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                 {
                        deportista.map(deportistas => (
                            <tr key={deportistas.id}>
                                <td>{deportistas.nombre}</td>
                                <td>{deportistas.tipo}</td>
                                <td>{deportistas.deporte}</td>
                                <td>{deportistas.correo}</td>
                                <td>{deportistas.edad}</td>
                                <td>{deportistas.imagen}</td>
                                <td><button onClick={() => dataDelete(deportistas.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                 </tbody>
            </table>
        </div>
    )
}
