import react, { useEffect, useRef, useState } from "react";
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../../../inputData.js'
import './BlockBodyStyle.css'
import ScrollBar from './ScrollBar.js'
import img1 from '../../../images/cup.png'
import img2 from '../../../images/glass.png'
import img3 from '../../../images/martini.png'
import img4 from '../../../images/shot.png'
function CreateBlockBody(props) {
    const block = useRef();
    const container = useRef();
    const content = useRef();
    const listItem = useRef();
 
    const [contentMarginTop, setContentMarginTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [contentHeight, setContentHeight ] = useState(0);
    const [contentMaxDeltaY, setContentMaxDeltaY] = useState(0);
    const [ratio, setRatio] = useState(0);
 
    useEffect(()=>{
        setContentMarginTop(getPixelsNumber(getComputedStyle(content.current).marginTop));
        setContainerHeight(getPixelsNumber(getComputedStyle(content.current).height)+ contentMarginTop);
        setContentHeight(getPixelsNumber(getComputedStyle(listItem.current).height)*props.list.length + contentMarginTop);
        setContentMaxDeltaY(contentHeight - containerHeight);
        setRatio(containerHeight/contentHeight);
        // console.log(props.glassType)
        let drinksTypes = cocktailsTypesObject.filter(item=>item.properties.glassType == props.glassType)
        // console.log(drinksTypes);
        if(props.title == 'Тип' && drinksTypes !== []) {
            let drinksArr = content.current.getElementsByTagName('li');
            for(let i = 0; i < drinksArr.length; i++) {
                for(let j = 0; j < drinksTypes.length; j++) {
                    if (drinksArr[i].innerHTML == drinksTypes[j].name) {
                        console.log(drinksArr[i])
                        drinksArr[i].style.color = 'red';
                    }
                }
                
            }  
            
        }
      
    })


    let cocktails = cocktailsTypesObject.filter(obj=>obj.properties.glassType == props.glass)
    // console.log(cocktails);
    // console.log(props.glass);
    // console.log(props.list);

   
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    if (contentHeight > containerHeight) {
        return(
            <div ref={block} id = 'body' className = {'block-body-list'} style={{position:"relative"}}>
                <div ref = {container} className= "scroll-container" style = {{overflowY:'scroll'}}>
                    <ul ref = {content}>
                        {props.list.map((val)=> {return (<li  ref = {listItem} className = 'listItem'>{val}</li>)})}
                    </ul>
                </div>
                <ScrollBar 
                    contentMarginTop = {contentMarginTop}
                    containerHeight = {containerHeight}
                    contentHeight = {contentHeight}
                    contentMaxDeltaY = {contentMaxDeltaY}
                    ratio = {ratio}
                    scrollArea  = {block}
                    content = {content}
                    container = {container}
                />
            </div>
        )
    }

    else return (   
        <div ref={block} id = 'body' className = {'block-body-list'} style={{position:"relative"}}>
            <div className= "scroll-container" style = {{overflowY:'scroll'}}>
                <ul ref = {content}>
                    {props.list.map((val)=> {return (<li  ref = {listItem} className = 'listItem'>{val}</li>)})}
                </ul>
            </div>
        </div>
    )
}

export default CreateBlockBody;