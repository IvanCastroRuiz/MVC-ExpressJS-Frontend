import { useState, useEffect } from 'react';
import Producto from './Producto';

const Main = () => {
  
    const [ consulta, setConsulta ] = useState([]);
    useEffect(() =>{
        const consultarApi = async () => {
            try {
                const respuesta = await fetch('http://localhost:4000/read');
                const resultado = await respuesta.json();
                setConsulta(resultado);
            } catch (error) {
                console.log(error);
            }
        };
        consultarApi();
        
    },[]);

    
  return (
    <div>

        <h2>Consultar Productos</h2>
        
        { consulta.length > 0 ? 
            (
                <div className="container mx-auto mt-10  flex flex-wrap">     
                    {consulta.map( producto => (
                                <Producto 
                                    key={producto._id}
                                    producto={producto}
                                />
                    ))}
                </div>
            )
            : 
                <div className="bg-white">
                    <p className="text-center text-3xl text-black my-10 font-bold uppercase">No Hay Resultados</p> 
                </div>
        }
    </div>
  )
}

export default Main