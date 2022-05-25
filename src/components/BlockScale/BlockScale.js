import react, { useEffect, useRef, useState } from "react";
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../../inputData.js'
import './BlockScaleStyle.css'
function BlockScale(props) {
   
  
    const block = useRef();
    const container = useRef();
    const content = useRef();
    const listItem = useRef();
    const checkbox = useRef();
 
    // const [contentMarginTop, setContentMarginTop] = useState(0);
    // const [containerHeight, setContainerHeight] = useState(0);
    // const [contentHeight, setContentHeight ] = useState(0);
    // const [contentMaxDeltaY, setContentMaxDeltaY] = useState(0);
    // const [ratio, setRatio] = useState(0);


    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    useEffect(()=>{
        let scaleValuesArr = content.current.getElementsByTagName('li');
        for(let i = 0; i < scaleValuesArr.length; i++) {
            scaleValuesArr[i].style.cursor = 'pointer';
            scaleValuesArr[i].onclick = (e)=> {
                for(let j = 0; j < scaleValuesArr.length; j++) {
                    scaleValuesArr[j].classList.remove('marker');
                    scaleValuesArr[j].style.background = '';
                }
                e.target.style.background = 'linear-gradient(to bottom, #CBCBCB, #E5E5E5)';
                e.target.classList.add('marker');
            }
        }

        checkbox.current.onclick = (e)=>{
            if(e.target.className == 'checkbox') {
                e.target.classList.remove('checkbox');
                e.target.classList.add('checkbox-active');
            } else if(e.target.className == 'checkbox-active') {
                e.target.classList.remove('checkbox-active');
                e.target.classList.add('checkbox');
            }
        }
    })

    return(
        <div className = 'block-scale short-block block'>
        <div className = {'block-scale-header block-header'}>
            <h2 className = 'block-title'> {props.title} </h2>
            <p className = 'block-subtitle' > {props.subtitle} </p>
        </div>
        <div ref={block} className = {'block-scale-body block-body'} style={{position:"relative"}}>
        
                
            <div className = {'top-block-scale-body'}>
                <div className = 'scale-block-container'>
                    <div className = 'scale-box'>
                        <ul ref = {content} className = 'scale-values'>
                            {props.list.map((val)=> {return (<li  ref = {listItem} className = 'value'>{val}</li>)})}
                        </ul>
                        <div className = 'scale-bar' style={{background:  props.isColored == true ? 'linear-gradient(to right, green, yellow, red)' : 'grey'     }}></div>
                    </div>
                </div>
            </div>

            <div className = {'bottom-block-scale-body'}>
                <div className = 'scale-block-container'>
                    <li ref = {checkbox} className = 'checkbox'> {props.checkboxText}</li>
                </div>
            </div>

           
        </div>
    </div>       
    )
}

export default BlockScale;