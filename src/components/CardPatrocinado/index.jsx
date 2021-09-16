import React from "react";
import "./estilos.css"
const CardPatrocinado=({data})=>{
    return <div className="contenedor_patrocinado">

    <div className="card_patrocinado">
        <div className="imgBox">
        <img src="https://img.icons8.com/dusk/64/000000/duty-free.png"/>
        <h3>{data.title} </h3>
        </div>
        <div className="conten_patrocinado">
            <p>
              {data.descrption}
            </p>
        </div>
    </div>
    </div>
}


export default CardPatrocinado