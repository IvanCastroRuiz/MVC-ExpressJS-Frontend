import React from 'react'

const Producto = ({producto}) => {
   
    
    
  return (
    <>
        <div>
          <label>ID: </label>
          {producto._id}
        </div>
        <div>
        <label>Nombre: </label>
          {producto.nombre}
        </div>
        <div>
        <label>Cantidad: </label>
          {producto.cantidad}
        </div>
  </>
  )
}

export default Producto