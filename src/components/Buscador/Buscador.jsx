import { graphql } from "gatsby"
import React  from "react"
import CardCategoriasTiendas from "../CardCategoria/CategoriasTiendas"
import "./estilos.css"
const Buscador=({isTienda,data})=>{
    return <div className="container-buscador">
        <input placeholder="Buscador" />
        {
            isTienda && <>
            <h3 
                        style={{
                            color: "white",
                            fontFamily:"font-family: 'Montserrat', sans-serif;",
                            marginTop:8
                        }}
                        >Categorias</h3>
                        <div className="container_categorias">
                     {
                         data.map(item=>{
                             return <CardCategoriasTiendas data={item} />

                         })
                     }
                     
                        </div>
            </>
        }
    </div>
}

export default Buscador

