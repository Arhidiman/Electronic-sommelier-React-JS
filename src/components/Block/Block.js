import react, { useEffect, useRef } from "react";
import BlockHeader from './BlockHeader/BlockHeader'
import BlockBody from './BlockBody/BlockBody'
import './BlockStyle.css'
function createBlock(props) {
    
    function returnOutput(value) {
        props.returnGlassType(value)
    }
   
    return(
        <div className = 'block-slider'>
            <BlockHeader 
                title = 'Бокал'
                subtitle = '4 бокала'
            />
            <BlockBody returnGlassType = {returnOutput} /> 
        </div>       
    )
}

export default createBlock;