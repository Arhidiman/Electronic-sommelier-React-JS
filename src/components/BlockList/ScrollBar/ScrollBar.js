import react, { useState, useEffect, useRef } from "react";
import './ScrollBar.css'
function ScrollBar(props) {


    const upArrow = useRef();
    const downArrow = useRef();
    const scroller = useRef();
    const scrollBar = useRef();
    const [scrollBarHeight, setScrollBarHeight] = useState(0);
    const [arrowsSummaryHeight, setArrowsSummaryHeight] = useState(25);
    const [scrollerHeight, setScrollerHeight] = useState(0);
    const [scrollerMaxDeltaY, setScrollerMaxDeltaY] = useState(0);
    const [maxScrollerBottom, setMaxScrollerBottom] = useState(0);
    const [minScrollerBottom, setMinScrollerBottom] = useState(0);
    // const [delta, setDelta] = useState(0);

    const delta = useRef(0);

    useEffect(()=>{
        setScrollBarHeight(props.containerHeight - arrowsSummaryHeight);
        setScrollerHeight(scrollBarHeight*props.ratio)
        setScrollerMaxDeltaY(scrollBarHeight - scrollerHeight);
        setMaxScrollerBottom(scrollerMaxDeltaY/2);
        setMinScrollerBottom(-scrollerMaxDeltaY/2);



        props.getChildElement(scrollBar.current);
        props.scrollArea.current.onwheel = (e)=>{
            delta.current = delta.current + e.deltaY;	
            let displacementRatio = Math.abs(e.deltaY/props.contentMaxDeltaY);				
            let bottom = getPixelsNumber(scroller.current.style.bottom);
            if((delta.current < props.contentMaxDeltaY) && e.deltaY > 0) {
                scroller.current.style.bottom = bottom - scrollerMaxDeltaY*displacementRatio + 'px'; 
            } else if(e.deltaY > 0) {
                delta.current = delta.current - e.deltaY;	
                let tempDeltaY = props.contentMaxDeltaY - delta.current;
                displacementRatio = Math.abs(tempDeltaY/props.contentMaxDeltaY);
                scroller.current.style.bottom = (Math.round(getPixelsNumber(scroller.current.style.bottom)) == Math.round(minScrollerBottom) ? scroller.current.style.bottom : ((bottom - scrollerMaxDeltaY*displacementRatio)) + 'px');
                delta.current = props.contentMaxDeltaY;
            } 
            else if(e.deltaY < 0 && (delta.current - e.deltaY) >= -e.deltaY) {
                scroller.current.style.bottom = (Math.round(getPixelsNumber(scroller.current.style.bottom)) == Math.round(maxScrollerBottom) ? scroller.current.style.bottom : ((bottom + scrollerMaxDeltaY*displacementRatio)) + 'px');
            } 
            else if(delta.current < 0) {
                delta.current = delta.current - e.deltaY;
                let tempDeltaY =  delta.current;
                displacementRatio = tempDeltaY/props.contentMaxDeltaY;
                scroller.current.style.bottom = (Math.round(getPixelsNumber(scroller.current.style.bottom)) == Math.round(maxScrollerBottom) ? scroller.current.style.bottom : ((bottom + scrollerMaxDeltaY*displacementRatio)) + 'px');
                delta.current = 0;
            }
        }
    },[delta.current, scrollBarHeight, scrollerHeight, scrollerMaxDeltaY, maxScrollerBottom, minScrollerBottom])

    let displasmentByClick = 75;
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    return(
        <div  ref = {scrollBar} className = 'scroll'>
            <div ref = {upArrow}  className="up-arrow" onClick={()=>{
                let bottom = getPixelsNumber(scroller.current.style.bottom);
                if(delta.current >= displasmentByClick) {
                    let displacementRatio = displasmentByClick/props.contentMaxDeltaY;
                    props.container.current.scrollTop = props.container.current.scrollTop - displasmentByClick;
                    scroller.current.style.bottom = bottom + scrollerMaxDeltaY*displacementRatio + 'px'; 
                }
                if((delta.current < displasmentByClick &&  props.container.current.scrollTop !== 0)) {
                    let displacementRatio = delta.current/props.contentMaxDeltaY;
                    props.container.current.scrollTop = props.container.current.scrollTop - displasmentByClick
                    scroller.current.style.bottom = bottom + scrollerMaxDeltaY*displacementRatio + 'px'; 
                    delta.current = 0;
                } 
                if(delta.current !== 0) {
                    delta.current = delta.current - displasmentByClick
                }
            }}
            onMouseOver = {(e)=>{
                e.target.style.borderBottom = '10px solid #707070';
                e.target.style.cursor = 'pointer';
            }}
            onMouseOut = {(e)=>{
                e.target.style.borderBottom  = '10px solid #93969A';
            }}
            onMouseDown = {(e)=>{
                e.target.style.borderBottom  = '10px solid #2E2E2E';
            }}
            onMouseUp ={(e)=>{
                e.target.style.borderBottom  = '10px solid #707070';
            }}></div>

            <div ref = {scroller} className="scroll-bar" style = {{height: scrollerHeight, bottom: maxScrollerBottom}}></div>

            <div ref = {downArrow} className="down-arrow" 
            onClick={()=>{
                let bottom = getPixelsNumber(scroller.current.style.bottom);
                if((props.contentMaxDeltaY - delta.current >= displasmentByClick)) {
                    let displacementRatio = displasmentByClick/props.contentMaxDeltaY;
                    props.container.current.scrollTop = props.container.current.scrollTop + displasmentByClick;
                    scroller.current.style.bottom = bottom - scrollerMaxDeltaY*displacementRatio + 'px'; 
                }
                if((props.contentMaxDeltaY - delta.current < displasmentByClick)) {
                    let displacementRatio = (props.contentMaxDeltaY - props.container.current.scrollTop)/props.contentMaxDeltaY;
                    props.container.current.scrollTop = props.container.current.scrollTop + displasmentByClick
                    scroller.current.style.bottom = bottom - scrollerMaxDeltaY*displacementRatio + 'px'; 
                } 
                delta.current = delta.current + displasmentByClick;
                if(delta.current >= props.contentMaxDeltaY) {
                    delta.current = props.contentMaxDeltaY
                    scroller.current.style.bottom = minScrollerBottom + 'px';
                }      
            }}
            onMouseOver = {(e)=>{
                e.target.style.borderTop = '10px solid #707070';;
                e.target.style.cursor = 'pointer';
            }}
            onMouseOut = {(e)=>{
                e.target.style.borderTop = '10px solid #93969A';;
            }}
            onMouseDown = {(e)=>{
                e.target.style.borderTop = '10px solid #2E2E2E';;
            }}
            onMouseUp ={(e)=>{
                e.target.style.borderTop = '10px solid #707070';
            }}></div>
        </div> 
    )
}

export default ScrollBar;