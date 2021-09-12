import React from "react"
import "./estilos.css"
const CardTiendas = () => {
  return <>
  <div class="block">
  <div class="container_tienda animate__animated animate__backInUp">

      <div className="imagen_container" style={{
        backgroundImage:"url('https://img.freepik.com/vector-gratis/logotipo-moda_23-2148558723.jpg?size=626&ext=jpg&ga=GA1.2.2107986711.1630540800')"
      }}> 
      <div className="redes_sociales_tienda">
      <img src="https://img.icons8.com/cute-clipart/64/000000/web.png"/>
      <img src="https://img.icons8.com/clouds/100/000000/facebook.png"/>
      <img src="https://img.icons8.com/clouds/100/000000/instagram-new--v2.png"/>
      </div>
     
      <div className="redes_description_tienda">
     
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