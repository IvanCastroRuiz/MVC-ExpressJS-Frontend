import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout
import Layout from './Layaut/Layout';
//componentes
import Main from './components/Main';
import ConsultaID from './components/consultaID';
import Actualizar from './components/Actualizar';
import Eliminar from './components/Eliminar';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
            {/* Rutas Publicas */}
            <Route exact path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="consulta-individual" element={<ConsultaID/>} />
                <Route path="actualizar" element={<Actualizar/>} />
                <Route path="eliminar" element={<Eliminar/>} />
            </Route>
        </Routes>  
      </Router>              
    </>
  );
}

export default App;
