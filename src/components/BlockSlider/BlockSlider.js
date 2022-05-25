import react, { useEffect, useRef, useState } from "react";
import React from 'react';
import './BlockSliderStyle.css'
function BlockSlider(props) {
    
    const block = useRef();
    const content = useRef();
    const container = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const image = useRef();
  
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    function getTranstionValue(pixels) {
        return(Number(pixels.substring(0, pixels.length - 3)));
    }

    useEffect(()=>{
        console.log(props.setImageWidth);
        props.setImageWidth(getPixelsNumber(getComputedStyle(container.current).width))
        props.setContentWidth(getPixelsNumber((getComputedStyle(image.current).width))*props.sliderImages.length)
        props.setStartPosition(getPixelsNumber((getComputedStyle(image.current).width))*(props.sliderImages.length - 1))
        if(props.sliderCounter < props.sliderImages.length && props.sliderCounter >= 0) {
            content.current.style.transform = `translateX(${props.transition}px)`;
        }

        if(props.sliderCounter == 0) {props.setGlassType('shot')};
        if(props.sliderCounter == 1) {props.setGlassType('martiniGlass')};
        if(props.sliderCounter == 2) {props.setGlassType('wineGlass')};
        if(props.sliderCounter == 3) {props.setGlassType('glass')};     
    },[props.sliderCounter, props.transition])

    function slideLeft() {
        if(props.sliderCounter > 0) {
            props.setTransition(props.transition - props.imageWidth);
            props.setSliderCounter(props.sliderCounter - 1);
        } 
    }

    function slideRight() {    
        if(props.sliderCounter < props.sliderImages.length - 1) {
            props.setTransition(props.transition + props.imageWidth);
            props.setSliderCounter(props.sliderCounter + 1);
        } 
    }
    return(
        <div className = 'block-slider block'>
            <div className = {'block-slider-header block-header'}>
                <h2 className = 'block-title' > {props.title} </h2>
                <p className = 'block-subtitle' > {props.subtitle} </p>
             </div>     

            <div ref={block} className = {'block-slider-body block-body'} style={{position:"relative"}}>
                <div ref = {leftArrow} className="left-arrow" 
                    onClick = {slideLeft}
                    onMouseOver = {(e)=>{
                        e.target.style.borderRight = '10px solid #707070';
                        e.target.style.cursor = 'pointer';
                    }}
                    onMouseOut = {(e)=>{
                        e.target.style.borderRight  = '10px solid #93969A';
                    }}
                    onMouseDown = {(e)=>{
                        e.target.style.borderRight  = '10px solid #2E2E2E';
                    }}
                    onMouseUp ={(e)=>{
                        e.target.style.borderRight  = '10px solid #707070';
                }}></div>

                <div ref = {container} className= "slider-container">   
                        <div ref = {content} className="slider-content" style={{left:`-${props.startPosition}px`, width:`${props.contentWidth}px`}}>
                                {props.sliderImages.map((val)=> {
                                    return (
                                    <div className = 'named-glass' style = {{height: '100%'}}>
                                        <div ref = {image} className = 'glass-image' style={{backgroundImage: `url(${val.url})`}}></div>
                                        <p className = 'glass-name'>{val.name}</p>
                                    </div>)}
                                )} 
                        </div>
                </div>

                <div ref = {rightArrow} className="right-arrow" 
                onClick = {slideRight}
                onMouseOver = {(e)=>{
                        e.target.style.borderLeft = '10px solid #707070';
                        e.target.style.cursor = 'pointer';
                    }}
                    onMouseOut = {(e)=>{
                        e.target.style.borderLeft  = '10px solid #93969A';
                    }}
                    onMouseDown = {(e)=>{
                        e.target.style.borderLeft  = '10px solid #2E2E2E';
                    }}
                    onMouseUp ={(e)=>{
                        e.target.style.borderLeft  = '10px solid #707070';
                }}></div>    
            </div>
        </div>       
    )
}

export default BlockSlider;