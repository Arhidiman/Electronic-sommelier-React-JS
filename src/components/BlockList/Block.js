import react, { useEffect, useRef } from "react";
import BlockHeader from './BlockHeader/BlockHeader'
import BlockBody from './BlockBody/BlockBody'
import './BlockStyle.css'
function createBlock(props) {
   
  
    console.log(props.glassType)

    
    return(
        <div className = 'block-list'>
        <BlockHeader 
            func = {props.func}
            title = {props.title}
            subtitle = {props.subtitle}
        />
        <BlockBody 
        title = {props.title}
        list = {props.list} 
        glassType = {props.glassType} 
        drinksTypes = {props.drinksTypes}/>
        </div>

            
    )
}

export default createBlock;