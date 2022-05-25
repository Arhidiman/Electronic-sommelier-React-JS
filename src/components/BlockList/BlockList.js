import react, { useEffect, useRef, useState } from "react";
import {typesList, strongnessList, drinkBaseList, cocktailsTypesObject} from '../../inputData.js'
import './BlockListStyle.css'
import ScrollBar from './ScrollBar/ScrollBar.js'
function BlockList(props) {
   
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
        setContentMarginTop(getPixelsNumber(getComputedStyle(content.current).marginTop));
        setContainerHeight(getPixelsNumber(getComputedStyle(content.current).height)+ contentMarginTop);
        setContentHeight(getPixelsNumber(getComputedStyle(listItem.current).height)*props.list.length + contentMarginTop);
        setContentMaxDeltaY(contentHeight - containerHeight);
        setRatio(containerHeight/contentHeight);
        let drinksTypes = cocktailsTypesObject.filter(item=>item.properties.glassType == props.glassType);
        let listItems = content.current.getElementsByTagName('li');
        let tempDrinksArr = [];
 
        function selectElement(elementsArr) {
            for(let i = 0; i < elementsArr.length; i++) {
                elementsArr[i].onclick = (e)=>{
                    for(let j = 0; j < elementsArr.length; j++) {
                        elementsArr[j].classList.add('active');
                        elementsArr[j].classList.remove('selected');
                    }
                    e.target.classList.add('selected');
                }
            }
        }
        
        if(props.title == 'Тип') {
            for(let i = 0; i < listItems.length; i++) {
                listItems[i].classList.add('inactive');
                listItems[i].classList.remove('active');
                listItems[i].classList.remove('selected');
                listItems[i].onclick = null;
            }
            
            for(let i = 0; i < listItems.length; i++) {
                for(let j = 0; j < drinksTypes.length; j++) {
                    if (listItems[i].innerHTML == drinksTypes[j].name) {
                        listItems[i].classList.remove('inactive');
                        listItems[i].classList.add('active');
                        tempDrinksArr.push(listItems[i]);
                    }
                }
            }  
            selectElement(tempDrinksArr);
    
        } else  {
            selectElement(listItems);
        } 
      
        if(props.isCheckbox == true) {
            for(let i = 0; i < listItems.length; i++) {
                listItems[i].className = 'checkbox';
                listItems[i].onclick = ()=> {
                    if(listItems[i].className == 'checkbox') {
                        listItems[i].classList.remove('checkbox');
                        listItems[i].classList.add('checkbox-active');
                    } else if(listItems[i].className == 'checkbox-active') {
                        listItems[i].classList.remove('checkbox-active');
                        listItems[i].classList.add('checkbox');
                    }
                }	
            }
        }
    })

    return(
        <div style = {{margin: props.margin}} className = {`block-list block ${props.className}`}>
            <div className = {'block-list-header block-header'} style = {{backgroundColor: props.headerBackground}}>
                <h2 className = 'block-title'> {props.title}</h2>
                <p className = 'block-subtitle' > {`${props.list.length} ${props.subtitle}`}  </p>
            </div>

            <div ref={block} className = {'block-body-list block-body'} style={{position:"relative", height: props.blockBodyHeight}}>
                <div ref = {container} className= "scroll-container" style = {{overflowY:'scroll'}}>
                    <ul ref = {content}>
                        {props.list.map((val)=> {return (<li  ref = {listItem} className = {props.isCheckbox == true ? 'checkbox' : 'listItem'}>{val}</li>)})}
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