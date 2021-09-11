import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Buscador from "../components/Buscador/Buscador"
import "./categorias.css"
import CardCategorias from "../components/CardCategoria/CardCategorias"
const Categorias = () => (
    <Layout>
        <Seo title="Categorias" />
        <div className="main">
            <Buscador />
            <div className="master">

                    <div style={{width:"100%"}}>
                        <h2 
                        style={{
                            color: "white"
                        }}
                        >Categorias</h2>
                    </div>
                <main className="contenido">
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
                    <CardCategorias />
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

export default Categorias
