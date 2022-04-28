import react, { useEffect, useRef, useState } from "react";
import React from 'react';
import BlockSlider from './BlockSlider/BlockSlider'
import BlockList from './BlockList/BlockList'
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../inputData.js'
import img1 from '../images/cup.png'
import img2 from '../images/glass.png'
import img3 from '../images/martini.png'
import img4 from '../images/shot.png'

function CreateSection(props) { 
    

    //block-slider constants
    const [glassType, setGlassType] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [startPosition, setStartPosition] = useState(0);
    const [sliderCounter, setSliderCounter] = useState(0)
    const [sliderImages, setSliderImages] = useState([{url: img1, name: 'Стакан', glassType: 'glass'}, {url:img2, name: 'Бокал для белого вина', glassType: 'wineGlass'}, {url:img3, name: 'Бокал для мартини', glassType: 'martiniGlass'}, {url:img4, name: 'Стопка', glassType: 'shot'}]);
    const [transition, setTransition] = useState(0);

    //block-list constants
    // const [contentMarginTop, setContentMarginTop] = useState(0);
    // const [containerHeight, setContainerHeight] = useState(0);
    // const [contentHeight, setContentHeight ] = useState(0);
    // const [contentMaxDeltaY, setContentMaxDeltaY] = useState(0);
    // const [ratio, setRatio] = useState(0);


    return(
        <section style = {{display: `${props.display}`, width: `${props.width}`}}>
            <BlockSlider title = 'Бокал' 
                subtitle = '4 бокала' 
                setGlassType={setGlassType} 
                setImageWidth = {setImageWidth} imageWidth = {imageWidth}
                setContentWidth = {setContentWidth} contentWidth = {contentWidth}
                setStartPosition = {setStartPosition} startPosition = {startPosition}
                setSliderCounter = {setSliderCounter} sliderCounter = {sliderCounter}
                setSliderImages = {setSliderImages} sliderImages = {sliderImages}
                setTransition = {setTransition} transition ={transition}
            />

            <BlockList title = 'Тип' 
                subtitle = '23 типа' 
                list = {typesList} 
                glassType = {glassType}
                // setContentMarginTop = {setContentMarginTop} contentMarginTop = {contentMarginTop}
                // setContainerHeight = {setContainerHeight} containerHeight = {containerHeight}
                // setContentHeight = {setContentHeight} contentHeight = {contentHeight}
                // setContentMaxDeltaY = {setContentMaxDeltaY} contentMaxDeltaY = {contentMaxDeltaY}
                // setRatio = {setRatio} ratio = {ratio}
                

            
            />
            <BlockList 
                title = 'Крепость' 
                subtitle = '4 вида' 
                list = {strongnessList}
                // setContentMarginTop = {setContentMarginTop} contentMarginTop = {contentMarginTop}
                // setContainerHeight = {setContainerHeight} containerHeight = {containerHeight}
                // setContentHeight = {setContentHeight} contentHeight = {contentHeight}
                // setContentMaxDeltaY = {setContentMaxDeltaY} contentMaxDeltaY = {contentMaxDeltaY}
                // setRatio = {setRatio} ratio = {ratio}    
            />
                
            <BlockList 
                title = 'Основа' 
                subtitle = '14 напитков' 
                list = {drinkBaseList}
                // setContentMarginTop = {setContentMarginTop} contentMarginTop = {contentMarginTop}
                // setContainerHeight = {setContainerHeight} containerHeight = {containerHeight}
                // setContentHeight = {setContentHeight} contentHeight = {contentHeight}
                // setContentMaxDeltaY = {setContentMaxDeltaY} contentMaxDeltaY = {contentMaxDeltaY}
                // setRatio = {setRatio} ratio = {ratio}
            />
        </section>
    )
}

export default CreateSection;