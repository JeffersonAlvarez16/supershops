import React  from "react"
import CardCategoriasTiendas from "../CardCategoria/CategoriasTiendas"
import "./estilos.css"
const Buscador=({isTienda})=>{
    return <div className="container-buscador">
        <input placeholder="Buscador" />
        {
            isTienda && <>
            <h3 
                        style={{
                            color: "white",
                            fontFamily:"font-family: 'Kaushan Script', cursive;",
                            marginTop:8
                        }}
                        >Categorias</h3>
                        <div className="container_categorias">
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        <CardCategoriasTiendas />
                        </div>
            </>
        }
    </div>
}

export default Buscador