import react, { useEffect, useRef, useState } from "react";
import React from 'react';
import './TopSectionStyle.css'
import BlockSlider from '../BlockSlider/BlockSlider'
import BlockList from '../BlockList/BlockList'
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../../inputData.js'
import img1 from '../../images/cup.png'
import img2 from '../../images/glass.png'
import img3 from '../../images/martini.png'
import img4 from '../../images/shot.png'


function CreateSection(props) { 
    

    useEffect(()=>{
    })
    const [glassType, setGlassType] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [startPosition, setStartPosition] = useState(0);
    const [sliderCounter, setSliderCounter] = useState(0)
    const [sliderImages, setSliderImages] = useState([{url: img1, name: 'Стакан', glassType: 'glass'}, {url:img2, name: 'Бокал для белого вина', glassType: 'wineGlass'}, {url:img3, name: 'Бокал для мартини', glassType: 'martiniGlass'}, {url:img4, name: 'Стопка', glassType: 'shot'}]);
    const [transition, setTransition] = useState(0);

    return(
        <section id = 'top-section' style = {{display: `${props.display}`, width: `${props.width}`}}>
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

            <BlockList 
                title = 'Тип' 
                subtitle = 'типа' 
                list = {typesList} 
                isCheckbox = {false}
                glassType = {glassType}
            />
            <BlockList 
                title = 'Крепость' 
                subtitle = 'вида' 
                list = {strongnessList}
                isCheckbox = {false}   
            />
                
            <BlockList 
                title = 'Основа' 
                subtitle = 'напитков' 
                list = {drinkBaseList}
                isCheckbox = {false}
            />
        </section>
    )
}

export default CreateSection;