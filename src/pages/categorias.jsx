import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Buscador from "../components/Buscador/Buscador"
import "./categorias.css"
import CardCategorias from "../components/CardCategoria/CardCategorias"
import Aqui from "../components/Aqui"
const Categorias = ({data}) => {
   
    let datos=data.allSanityCategorias.nodes;
   return <Layout>
        <Seo title="Categorias" />
        <div className="main">
            <Buscador data={datos} />
            <div className="master">

                    <div style={{width:"100%"}}>
                        <h2 
                        style={{
                            color: "white",
                          
                        }}
                        >Categorias</h2>
                    </div>
                <main className="contenido">
                {
                    datos.map(item=>{

                        return <CardCategorias data={item} />
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

export default Categorias



export const query = graphql`
query Categorias {
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