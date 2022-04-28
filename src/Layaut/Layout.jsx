import  { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Layout = () => {
    return (
       <>
         <header>
            <h1>Sistema Productos PCA - SENA</h1>
         </header>
         <nav>
         <div className="nav-bg">
            <nav className="navegacion-principal contenedor">
                  <Link to="/">Inicio</Link>
                  <Link to="/consulta-individual">Consultas Individual</Link>
                  <Link to="/actualizar">Actualizar Productos</Link>
                  <Link to="/eliminar">Eliminar Productos</Link>
            </nav>
         </div>
         </nav>
         
         <main className="contenedor sombra">    
            <Outlet/>
         </main> 
         
       </>
    )
  }

export default Layout