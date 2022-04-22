import react, { useEffect, useRef, useState } from "react";
import BlockSlider from './Block/Block'
import BlockList from './BlockList/Block'
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../inputData.js'

function CreateSection(props) { 
    
    const [glassType, setGlassType] = useState(null);
    // const [drinksTypes, setDrinksTypes] = useState([])

    // let glassType = null

    function returnOutput(value) {
        // setGlassType(value);
        console.log(glassType);
        // let newCocktails = cocktailsTypesObject.filter(obj=>obj.properties.glassType == glassType)
    }
    // useEffect(()=>{

    //         // setDrinksTypes(cocktailsTypesObject.filter(obj=>obj.properties.glassType == glassType));
    // },[drinksTypes])



    



    console.log(glassType);




    return(
        <section style = {{display: `${props.display}`, width: `${props.width}`}}>
            <BlockSlider returnGlassType = {returnOutput}/>
            <BlockList title = 'Тип' subtitle = '23 типа' list = {typesList} glassType = {glassType}/>
            <BlockList title = 'Крепость' subtitle = '4 вида' list = {strongnessList}/>
            <BlockList title = 'Основа' subtitle = '14 напитков' list = {drinkBaseList}/>
        </section>
    )
}

export default CreateSection;