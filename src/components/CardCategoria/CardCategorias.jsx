import React from "react"
import "./estilos.css"
const CardCategorias = ({data}) => {
  console.log(data)
    return <div className="card animate__animated animate__backInUp">
   
    <div className="card-text">
      <div className="portada" style={{
        backgroundImage:`url(${data.icono.asset.url})`
      }}>
      
      </div>
      <div className="title-total">   
      
        <h2>{data.titulo} </h2>
    
    
   </div>
   
    </div>
    
   
    
  </div>
}


export default CardCategorias