import react, { useEffect, useRef, useState } from "react";
import {cocktailsTypesObject} from '../../inputData.js'
import './BlockDesription.css'
function BlockDescription(props) {
   

    const block = useRef();
    const container = useRef();
    const content = useRef();
    const leftButton = useRef();
    const rightButton = useRef();
  
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    useEffect(()=>{
            leftButton.current.onclick = (e)=> {
            document.getElementsByClassName('instruction')[0].style.display = 'none';
            document.getElementsByClassName('instruction')[1].style.display = 'block';
            document.getElementsByClassName('tab')[1].classList.remove('tab-selected')
            e.target.classList.add('tab-selected');
        }
            rightButton.current.onclick = (e)=> {
            document.getElementsByClassName('instruction')[0].style.display = 'block';
            document.getElementsByClassName('instruction')[1].style.display = 'none';
            document.getElementsByClassName('tab')[0].classList.remove('tab-selected')
            e.target.classList.add('tab-selected');
        }
    })

    return(
        <div className = 'block-description wide-block block'>
            <div className = {'block-description-header block-header'}>
                <h2 className = 'block-title'> {props.title} </h2>
                <p className = 'block-subtitle' > {props.subtitle} </p>
            </div>
            <div ref={block} className = {'block-description-body block-body'} style={{position:"relative"}}>
                <div ref = {container} className= "description-container">
                    <form>
                        <input placeholder="Название"></input>
                        <input placeholder="Альтернативное название через запятую"></input>
                        <div className="input-description">
                            <div ref = {leftButton} className="tab tab-selected">Краткое описание</div>
                            <div ref = {rightButton} className="tab">Инструкция по применению</div>
                            <textarea className="instruction input"></textarea>
                            <textarea className="instruction input"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>       
    )
}

export default  BlockDescription;