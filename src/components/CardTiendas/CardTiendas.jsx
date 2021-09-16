import React from "react"
import "./estilos.css"
const CardTiendas = ({data}) => {
  return <>
  <div className="block"  style={{
     backgroundSize: "100%",
     width: "calc(100% + 6px)",
     height: "calc(100% + 6px)",
     zIndex: -1,
     animation: "steam 20s linear infinite",
    background: `linear-gradient(-10deg, ${data.colores[0]}, ${data.colores[1]},${data.colores[2]})`
  }}>
  <div className="container_tienda animate__animated animate__backInUp">

      <div className="imagen_container" style={{
        backgroundImage:`url('${data.logo.asset.url}')`,
        backgroundPosition:"initial",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}> 
      <div className="redes_sociales_tienda">
      <img src="https://img.icons8.com/color/48/000000/internet--v1.png"/>
      <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
      <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
      </div>
     
      <div className="redes_description_tienda" style={{
        background: `linear-gradient(-10deg, ${data.colores[0]}, ${data.colores[1]},${data.colores[2]})`
      }}>
     
       <p>
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       </p>
     
      </div>
      <div className="icono_navegar">
      <img className="animate__animated animate__fadeInBottomLeft" src="https://img.icons8.com/material-sharp/96/000000/navigation.png"/>
      </div>
      </div>
      
  </div>
 
  
  </div>
  </>
}


export default CardTiendas