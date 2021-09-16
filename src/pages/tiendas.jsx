import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Buscador from "../components/Buscador/Buscador"
import "./categorias.css"
import CardCategorias from "../components/CardCategoria/CardCategorias"
import CardCategoriasTiendas from "../components/CardCategoria/CategoriasTiendas"
import CardTiendas from "../components/CardTiendas/CardTiendas"
const Tiendas = ({data}) => {
    let datosTiendas=data.allSanityTiendas.nodes;
    let datosCategorias=data.allSanityCategorias.nodes;
    return <Layout>
        <Seo title="Tiendas" />
        <div className="main">
            <Buscador isTienda={true} data={datosCategorias} />
            
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
                  {
                    datosTiendas.map(item=>{

                      return <CardTiendas data={item} />
                    })
                  }
               
                  
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
}

export default Tiendas



export const query = graphql`
{
  allSanityTiendas {
    nodes {
      colores
      descripcion
      id
      nombre
      palabra_clave
      categoria {
        id
        titulo
      }
      logo {
        asset {
          url
        }
      }
    }
  }

    allSanityCategorias {
      nodes {
        categorias {
          titulo
          id
        }
        id
        titulo
        icono {
          asset {
            url
          }
        }
      }
    }
  }
  
  
  
`