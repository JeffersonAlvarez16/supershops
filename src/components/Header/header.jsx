import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  header, logo, container_logo, containers_items, tiendas_link, h3, categorias_link,
  market_link, container__header, container__header_open, header_open, header_div_open, categorias_link_open, containers_items_open, logo_open, tiendas_link_open
  , market_link_open, container_logo_open, logo_mobile, title, container_title, container_logo_mobile,title_bienvenida
} from "./header.module.css"
import "./header.css"
import "animate.css"
const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)


  if (isOpen) {
    return <div className={`animate__animated animate__backInLeft ${header_div_open}`}>
      <header
        className={header_open}
      >
        <div

          className={container__header_open}
        >
          <div className={logo_open}>
            <div className={container_logo_open}>
              <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-shop-marketing-flatart-icons-lineal-color-flatarticons.png" />

            </div>
            <img width="32" height="32" src="Grupo.png" onClick={() => setIsOpen(false)} />
          </div>
          <div className={title_bienvenida}>
            <h4>
              Bienvenido a</h4>
            <h4>
              WHATSHOP MARKETPLACE</h4>
          </div>
          <div className={containers_items_open}>
            <Link to="/categorias" className={categorias_link_open}>

              <img width="48" src="https://img.icons8.com/color/48/000000/categorize.png" />
              <div>
                <h4 className="">
                  Categorias
                </h4>


              </div>
            </Link>

            <Link className={tiendas_link_open}>

              <img width="48" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-shop-marketing-flatart-icons-lineal-color-flatarticons.png" />
              <div className={h3}>
                <h4 className="animate__animated animate__fadeInTopLeft">
                  Tiendas
                </h4>


              </div>
            </Link>
            <Link className={market_link_open}>

              <img width="48" src="https://img.icons8.com/color-glass/96/000000/market-square.png" />

              <div className={h3}>
                <h4 className="animate__animated animate__fadeInTopLeft">
                  ¿Qué es SuperShops
                  marketplace?
                </h4>


              </div>
            </Link>

            <div>
            </div>

          </div>
          <hr />
          <div className />
          <div className="quiero-mi-tienda">
            <h4>
              ¿Quieres que tu tienda online esté en esta
              página web?
            </h4>
            <div className="url_tienda">
              <input placeholder="Escribe la URL de tu tienda online" />
              <img width="32" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-arrow-right-arrows-flatart-icons-solid-flatarticons-3.png" />
            </div>
            <div className="no_tengo_tienda">
              <button>
                No tengo una tienda en linea

              </button>
            </div>
          </div>


        </div>
      </header>
    </div>

  } else {
    return <header
      className={`animate__animated animate__pulse ${header}`}
    >
      <div
        className={container__header}
      >
        <div className={logo_mobile}>
          <div className={container_logo_mobile}>
            <img style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} src="/menu_mobile.png" />

          </div>
        </div>
        <Link to="/" style={{
          width: "100%",
          textDecoration:"none",
          color:"black"
        }} className={categorias_link}>

        <div className={logo}>
          <div className={container_logo}>
            <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-shop-marketing-flatart-icons-lineal-color-flatarticons.png" />
            <h4>
              SuperHops
            </h4>

          </div>
        </div>
        </Link>

        <div className={containers_items}>
          <Link to="/categorias" className={categorias_link}>

            <img width="48" src="https://img.icons8.com/color/48/000000/categorize.png" />
            <div className={h3}>
              <h3 className="animate__animated animate__fadeInTopLeft">
                Categorias
              </h3>


            </div>
          </Link>

          <Link to="/tiendas" className={tiendas_link}>

            <img width="48" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-shop-marketing-flatart-icons-lineal-color-flatarticons.png" />
            <div className={h3}>
              <h3 className="animate__animated animate__fadeInTopLeft">
                Tiendas
              </h3>


            </div>
          </Link>
          <Link className={market_link}>

            <img width="48" src="https://img.icons8.com/color-glass/96/000000/market-square.png" />
            <div className={h3}>
              <h3 className="animate__animated animate__fadeInTopLeft">
                ¿Qué es SuperShops
                marketplace?
              </h3>


            </div>
          </Link>

          <div>
          </div>

        </div>

        <div className="icon_open_menu">

          <img style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} width="36" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-arrow-right-arrows-flatart-icons-lineal-color-flatarticons-3.png" />
        </div>
      </div>
    </header>
  }


}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
