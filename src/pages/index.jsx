import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardCategorias from "../components/CardCategoria/CardCategorias"
import Buscador from "../components/Buscador/Buscador"
import CardPrincipal from "../components/CardPrincipal"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main">
            <Buscador />
            <div className="master">

                      <CardPrincipal />
                    <div style={{width:"100%"}}>
                        <h2 
                        style={{
                            color: "white",
                            fontFamily:"font-family: 'Kaushan Script', cursive"
                        }}
                        >Categorias</h2>
                    </div>
                <main className="contenido">

                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                  
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

export default IndexPage
