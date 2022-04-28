import react, { useEffect, useRef, useState } from "react";
import React from 'react';
import BlockIngredients from './BlockIngredients/BlockIngredients'
import BlockScale from './BlockScale/BlockScale'
import BlockList from './BlockList/BlockList'
import './MiddleSectionStyle.css'
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject, ingredients, portionScale, timeScale, complexityScale, methods} from '../inputData.js'

function CreateSection(props) { 
    
    //block-list constants
    const [contentMarginTop, setContentMarginTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [contentHeight, setContentHeight ] = useState(0);
    const [contentMaxDeltaY, setContentMaxDeltaY] = useState(0);
    const [ratio, setRatio] = useState(0);


    return(
        <section style = {{display: `${props.display}`, width: `${props.width}`}}>
            <BlockIngredients title = 'Ингредиенты' list = {ingredients}/>
            <div className="properties">
                <BlockScale title = 'Порции' list = {portionScale} checkboxText = '+2 порции' />
                <BlockScale title = 'Время' list = {timeScale} checkboxText = 'увеличенное время' />
                <BlockScale title = 'Сложность' checkboxText = 'вне категорий' isColored = {true} list = {complexityScale}/>
                <BlockList 
                    title = 'Метод' 
                    subtitle = '5 методов' 
                    headerBackground = '#a200ff' 
                    blockBodyHeight = '85px'  
                    list = {methods}
                    setContentMarginTop = {setContentMarginTop} contentMarginTop = {contentMarginTop}
                    setContainerHeight = {setContainerHeight} containerHeight = {containerHeight}
                    setContentHeight = {setContentHeight} contentHeight = {contentHeight}
                    setContentMaxDeltaY = {setContentMaxDeltaY} contentMaxDeltaY = {contentMaxDeltaY}
                    setRatio = {setRatio} ratio = {ratio}
                />

                

            </div>
        </section>
    )
}

export default CreateSection;