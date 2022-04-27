import { useState, useEffect } from 'react';

function App() {
  const [ consulta, setConsulta ] = useState({});
  useEffect(() =>{
    const consultarApi = async () => {
        try {
            const respuesta = await fetch('http://localhost:4000/read');
            const resultado = await respuesta.json();
            setConsulta(resultado);
            console.log(consulta);                
        } catch (error) {
            console.log(error);
        }
    };
    consultarApi();
  },[]);


  return (
    <div>
      Sistema Pedidos
    </div>
  );
}

export default App;
