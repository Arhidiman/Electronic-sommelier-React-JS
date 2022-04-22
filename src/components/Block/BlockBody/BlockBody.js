import react, { useEffect, useRef, useState } from "react";
import './BlockBodyStyle.css'
import img1 from '../../../images/cup.png'
import img2 from '../../../images/glass.png'
import img3 from '../../../images/martini.png'
import img4 from '../../../images/shot.png'
function CreateBlockBody(props) {

    

    const [count, setCount] = useState(0);

    const block = useRef();
    const content = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const image = useRef();

    const [sliderCounter, setSliderCounter] = useState(0)
    const [isMoveRight, setIsMoveRight] = useState(true);
    const [isMoveLeft, setIsMoveLeft] = useState(false);
    



    const [contentWidth, setContainerWidth] = useState();
    const [startPosition, setStartPosition] = useState();
    const [imageWidth, setImageWidth] = useState(0)
    const [sliderImages, setSliderImages] = useState([{url: img1, name: 'Стакан', glassType: 'glass'}, {url:img2, name: 'Бокал для белого вина', glassType: 'wineGlass'}, {url:img3, name: 'Бокал для мартини', glassType: 'martiniGlass'}, {url:img4, name: 'Стопка', glassType: 'shot'}])
    const [slideDeltaX, setSlideDeltaX] = useState(0);
    // const [glassType, setGlassType] = useState('shot')
    
    // let sliderCounter = 0;
    // let isMoveRight = true;
    // let isMoveLeft = false;
    let glassType = 'shot';
    props.returnGlassType(glassType);
    
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    useEffect(()=>{
        setImageWidth(getPixelsNumber(getComputedStyle(block.current).width))
        setContainerWidth(getPixelsNumber((getComputedStyle(image.current).width))*sliderImages.length)
        setStartPosition(getPixelsNumber((getComputedStyle(image.current).width))*(sliderImages.length - 1))
        setSlideDeltaX(getPixelsNumber(getComputedStyle(image.current).width));
        props.returnGlassType(glassType);
        console.log(`sliderCounter = ${sliderCounter}`)
        console.log(`slideDeltaX = ${slideDeltaX}`)
        console.log(`ImageWidth = ${imageWidth}`)
        console.log(`isMoveRight = ${isMoveRight}`)
        console.log(`isMoveLeft = ${isMoveLeft}`)
    },[isMoveRight, sliderCounter, isMoveLeft])

    function slideLeft() {
        let currentSlideDeltaX = 0;
        if(isMoveLeft == true) {
            console.log(content);
            let slideInterval = setInterval(()=>{
                content.current.style.left = Number(content.current.style.left.substring(0, content.current.style.left.length - 2)) - 1 +'px';
                setIsMoveLeft(false);
                currentSlideDeltaX--;
                console.log(currentSlideDeltaX);
                if(currentSlideDeltaX % slideDeltaX == 0) {
                    console.log(`slideDeltaX = ${slideDeltaX}`)
                    console.log(`ImageWidth = ${imageWidth}`)
                    clearInterval(slideInterval);
                    setIsMoveLeft(true);
                    // sliderCounter--;
                    setSliderCounter(sliderCounter - 1);
                    if(sliderCounter == 0) {glassType = 'shot'};
                    if(sliderCounter == 1) {glassType = 'martiniGlass'};
                    if(sliderCounter == 2) {glassType = 'wineGlass'};
                    if(sliderCounter == 3) {glassType = 'glass'};
                    props.returnGlassType(glassType);
                    // console.log(`sliderCounter = ${sliderCounter}`);
                    if(sliderCounter > 0) {setIsMoveRight(true)};
                    if(sliderCounter == 0) {setIsMoveLeft(false); setIsMoveRight(true)};
                }
            }, 1)
        }
    }

    function slideRight() {    
        let currentSlideDeltaX = 0;
        if(isMoveRight == true) {
            console.log(content.current);
            let slideInterval = setInterval(()=>{
                content.current.style.left = Number(content.current.style.left.substring(0, content.current.style.left.length - 2)) + 1 +'px';
                setIsMoveRight(false);
                currentSlideDeltaX++;
                // console.log(currentSlideDeltaX);
                if(currentSlideDeltaX % slideDeltaX == 0) {
                    setSliderCounter(sliderCounter + 1); //Проблема асинхронности в этой строчке(порядок выполнения кода: строка №106 -> №108 -> №100; Должно быть: №100 -> №106 -> №108)
                    setIsMoveRight(true);
                    console.log(`slideDeltaX= ${slideDeltaX}`);
                    console.log(`ImageWidth = ${imageWidth}`);
                    clearInterval(slideInterval);
                   
                    // sliderCounter++;
                
                   
                  
                    if(sliderCounter == 0) {glassType = 'shot'};
                    if(sliderCounter == 1) {glassType = 'martiniGlass'};
                    if(sliderCounter == 2) {glassType = 'wineGlass'};
                    if(sliderCounter == 3) {glassType = 'glass'};
                    props.returnGlassType(glassType);
                    console.log(`sliderImages.length - 1 = ${sliderImages.length - 1}`)
                    if(sliderCounter == sliderImages.length - 1) {console.log(sliderCounter); setIsMoveRight(false); setIsMoveLeft(true)};
                    if(sliderCounter < sliderImages.length - 1) {console.log(sliderCounter); setIsMoveLeft(true)} ;
                }
            }, 1)
        }
    }
    
    return(
        <div ref={block} className = {'block-slider-body'} style={{position:"relative"}}>
            <div ref = {leftArrow} className="left-arrow" onClick={()=>{slideLeft()}}
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
            <div className= "slider-container">
                <div ref = {content} className="slider-content" style={{left:`-${startPosition}px`, width:`${contentWidth}px`}}>
                    {sliderImages.map((val)=> {
                        return (
                        <div>
                            <div ref = {image} className = 'image' style={{width:`${imageWidth}px`, width: '115px', height:'80%', backgroundRepeat:"no-repeat", backgroundSize: "100% 100%", backgroundImage: `url(${val.url})`, border: 'none'}}></div>
                            <p className = 'glass-name'>{val.name}</p>
                        </div>)}
                    )} 
                </div>
            </div>
            <div  ref = {rightArrow} className="right-arrow" onClick={()=>{slideRight()}}
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
    )
    console.log(sliderImages);

}



export default CreateBlockBody;