import react, { useEffect, useRef, useState } from "react";
import {cocktailsTypesObject} from '../../inputData.js'
import './BlockStyle.css'
function BlockIngredients(props) {
   

    const block = useRef();
    const container = useRef();
    const content = useRef();
    const ingredientsList = useRef();
    const listItem = useRef();
 

  
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    useEffect(()=>{
        
    },[])

    let ingredientsCounter = 0;

    return(
        <div className = 'block-ingredients'>
            <div className = {'block-ingredients-header'}>
                <h2 className = 'block-title'> {props.title} </h2>
                <p className = 'block-subtitle' > {props.subtitle} </p>
            </div>
            <div ref={block} className = {'block-ingredients-body'} style={{position:"relative"}}>
                <div ref = {container} className= "ingredients-container">
                    <ul ref ={ingredientsList} className="ingredients-list"></ul>
                    <select ref = {content} onChange = {()=>{
                        	ingredientsCounter++;
                            let item = document.createElement('li');
                            item.className = 'ingredient';
                            item.innerHTML = `${ingredientsCounter}. ${content.current.options[content.current.selectedIndex].innerHTML}`;
                            // //console.log(content.current.options);
                            // //console.log(content.current.selectedIndex);
                            // //console.log(ingredientsList.current);
                            // //console.log(ingredientsCounter);
                            ingredientsList.current.appendChild(item);
                            content.current.selectedIndex = 0;
                    }}>
                        {props.list.map((val)=> {return (<option  ref = {listItem} className = 'listItem'>{val}</option>)})}
                    </select>
                </div>
            </div>
        </div>       
    )
}

export default  BlockIngredients;