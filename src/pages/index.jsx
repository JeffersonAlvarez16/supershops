import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardCategorias from "../components/CardCategoria/CardCategorias"
import Buscador from "../components/Buscador/Buscador"
import CardPrincipal from "../components/CardPrincipal"

const IndexPage = ({data}) => {
    console.log(data)
    let datos=data.allSanityCategorias.nodes;
   //  datos.slice(6)
 return <Layout>
    <Seo title="Home" />
    <div className="main">
            <Buscador isTienda={false} />
            <div className="master">

                      <CardPrincipal />
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
                    <div className="mas_categorias">
                       <h2> Mas categorias</h2>
                    </div>
                  
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

export default IndexPage



export const query = graphql`
query CategoriasIndex {
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