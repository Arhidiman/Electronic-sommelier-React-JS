import react, { useEffect, useRef, useState } from "react";
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../../inputData.js'
import './BlockStyle.css'
import ScrollBar from './ScrollBar/ScrollBar.js'
function BlockList(props) {
   
  
     //console.log(props.glassType)
    useEffect(()=>{
         //console.log(props.glassType);
    })

    const block = useRef();
    const container = useRef();
    const content = useRef();
    const listItem = useRef();
 
    const [contentMarginTop, setContentMarginTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [contentHeight, setContentHeight ] = useState(0);
    const [contentMaxDeltaY, setContentMaxDeltaY] = useState(0);
    const [ratio, setRatio] = useState(0);

    function getChildElement(value) {
        value.remove();
    }

    function showElement (value) {
         console.log(value);
    }

    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    

    useEffect(()=>{
        // console.log(props)
        // console.log(props.setContentMarginTop)
        setContentMarginTop(getPixelsNumber(getComputedStyle(content.current).marginTop));
        setContainerHeight(getPixelsNumber(getComputedStyle(content.current).height)+ contentMarginTop);
        setContentHeight(getPixelsNumber(getComputedStyle(listItem.current).height)*props.list.length + contentMarginTop);
        setContentMaxDeltaY(contentHeight - containerHeight);
        setRatio(containerHeight/contentHeight);
        let drinksTypes = cocktailsTypesObject.filter(item=>item.properties.glassType == props.glassType);
        let drinksArr = content.current.getElementsByTagName('li');
        let tempDrinksArr = [];

        for(let i = 0; i < drinksArr.length; i++) {
            drinksArr[i].classList.add('inactive');
            drinksArr[i].classList.remove('active');
            drinksArr[i].classList.remove('selected');
        }
        if(props.title == 'Тип') {
            for(let i = 0; i < drinksArr.length; i++) {
                for(let j = 0; j < drinksTypes.length; j++) {
                    if (drinksArr[i].innerHTML == drinksTypes[j].name) {
                         //console.log(drinksArr[i])
                        drinksArr[i].classList.remove('inactive');
                        drinksArr[i].classList.add('active');
                        tempDrinksArr.push(drinksArr[i]);
                    }
                }
            }  
        }  
        for(let i = 0; i < tempDrinksArr.length; i++) {
            tempDrinksArr[i].onclick = (e)=>{
                for(let j = 0; j < tempDrinksArr.length; j++) {
                    tempDrinksArr[j].classList.add('active');
                    tempDrinksArr[j].classList.remove('selected');
                }
                e.target.classList.add('selected');
            }
        }
    })

    return(
        <div className = 'block-list'>
            <div className = {'block-list-header'} style = {{backgroundColor: props.headerBackground}}>
                <h2 className = 'block-title'> {props.title} </h2>
                <p className = 'block-subtitle' > {props.subtitle} </p>
            </div>

            <div ref={block} className = {'block-body-list'} style={{position:"relative", height: props.blockBodyHeight}}>
                <div ref = {container} className= "scroll-container" style = {{overflowY:'scroll'}}>
                    <ul ref = {content}>
                        {props.list.map((val)=> {return (<li  ref = {listItem} className = 'listItem'>{val}</li>)})}
                    </ul>
                </div>
                
                <ScrollBar 
                    getChildElement = {contentHeight < containerHeight ? getChildElement : showElement}
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
        </div>      
    )
}

export default BlockList;