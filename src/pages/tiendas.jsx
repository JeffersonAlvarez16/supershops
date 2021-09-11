import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Buscador from "../components/Buscador/Buscador"
import "./categorias.css"
import CardCategorias from "../components/CardCategoria/CardCategorias"
import CardCategoriasTiendas from "../components/CardCategoria/CategoriasTiendas"
import CardTiendas from "../components/CardTiendas/CardTiendas"
const Tiendas = () => (
    <Layout>
        <Seo title="Tiendas" />
        <div className="main">
            <Buscador isTienda={true} />
            
            <div className="master_tiendas">

                    <div style={{width:"100%",marginBottom:16}}>
                        
                        <h2 
                        style={{
                            color: "white",
                            marginTop:16
                        }}
                        >Tiendas</h2>
                    </div>

                <main className="contenido_tiendas">
                <CardTiendas />
                  
                </main>

                {/* <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer> */}
            </div>
        </div>
    </Layout>
)

export default Tiendas
