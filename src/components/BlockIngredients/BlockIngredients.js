import react, { useEffect, useRef, useState } from "react";
import {cocktailsTypesObject} from '../../inputData.js'
import './BlockIngredientsStyle.css'
function BlockIngredients(props) {
   

    const block = useRef();
    const container = useRef();
    const content = useRef();
    const ingredientsList = useRef();
    // const listItem = useRef();

    const [listItem, setListItem] = useState();
    const [ingredientsCounter, setIngredientsCounter] = useState(0);

    useEffect(()=>{
        if(ingredientsCounter !== 0) {
            listItem.className = 'ingredient';
            listItem.innerHTML = `${ingredientsCounter}. ${content.current.options[content.current.selectedIndex].innerHTML}`;
            ingredientsList.current.appendChild(listItem);
            content.current.selectedIndex = 0;
        }
    })
 
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }
    
    return(
        <div className = 'block-ingredients wide-block block'>
            <div className = {'block-ingredients-header block-header'}>
                <h2 className = 'block-title'> {props.title} </h2>
                <p className = 'block-subtitle' > {props.subtitle} </p>
            </div>
            <div ref={block} className = {'block-ingredients-body block-body'} style={{position:"relative"}}>
                <div ref = {container} className= "ingredients-container">
                    <ul ref ={ingredientsList} className="ingredients-list"></ul>
                    <select ref = {content} onChange = {()=>{
                        	setIngredientsCounter(ingredientsCounter + 1);
                            setListItem(document.createElement('li'));
                    }}>
                        {props.list.map((val)=> {return (<option  className = 'listItem'>{val}</option>)})}
                    </select>
                </div>
            </div>
        </div>       
    )
}

export default  BlockIngredients;