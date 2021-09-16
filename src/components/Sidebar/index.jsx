import * as React from "react"
import Aqui from "../Aqui"
import CardPatrocinado from "../CardPatrocinado"
import "./estilos.css"
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw";
const Sidebar = ({ }) => {

    let pa = [
        {
            title: "Patrocinador 1",
            descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus dolore nisi aspernatur nam tempora maiores unde, adipisci, ipsa cupiditate ullam corrupti est odio architecto quidem earum ut et. Laudantium?"
        },
        {
            title: "Patrocinador 2",
            descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus dolore nisi aspernatur nam tempora maiores unde, adipisci, ipsa cupiditate ullam corrupti est odio architecto quidem earum ut et. Laudantium?"
        },
        {
            title: "Patrocinador 3",
            descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusamus dolore nisi aspernatur nam tempora maiores unde, adipisci, ipsa cupiditate ullam corrupti est odio architecto quidem earum ut et. Laudantium?"
        }
    ]
    return <aside>
        <div className="slider">

      <div className="uto_scroll">
         {
             pa.map(item=>{
                  return <CardPatrocinado data={item} />
             })
         }
      </div>
        </div>
        <Aqui />
    </aside>
}

export default Sidebar