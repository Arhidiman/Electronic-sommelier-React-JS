import react, { useEffect, useRef } from "react";
import './BlockHeaderStyle.css'

function createBlockBody(props) {
    return(
        <div className = {'block-slider-header'}>
        <h2 className = 'block-title' > {props.title} </h2>
        <p className = 'block-subtitle' > {props.subtitle} </p>
        </div>
    )
}

export default createBlockBody;