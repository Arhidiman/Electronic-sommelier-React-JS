import react, { useState, useEffect, useRef } from "react";
import './ScrollBar.css'
function ScrollBar(props) {


    const upArrow = useRef();
    const downArrow = useRef();
    const scroller = useRef();
   
    const [scrollBarHeight, setScrollBarHeight] = useState(0);
    const [arrowsSummaryHeight, setArrowsSummaryHeight] = useState(25);
    const [scrollerHeight, setScrollerHeight] = useState(0);
    const [scrollerMaxDeltaY, setScrollerMaxDeltaY] = useState(0);
    const [maxScrollerBottom, setMaxScrollerBottom] = useState(props.maxScrollerBottom);
    const [minScrollerBottom, setMinScrollerBottom] = useState(0);

    let delta = 0;
   
    useEffect(()=>{
        setScrollBarHeight(props.containerHeight - arrowsSummaryHeight);
        setScrollerHeight(scrollBarHeight*props.ratio)
        setScrollerMaxDeltaY(scrollBarHeight - scrollerHeight);
        setMaxScrollerBottom(scrollerMaxDeltaY/2);
        setMinScrollerBottom(-scrollerMaxDeltaY/2);

        
        props.scrollArea.current.onwheel = (e)=>{
            console.log(scroller.current.style.bottom );
            delta = delta + e.deltaY;	
            console.log(delta);
            console.log(e.deltaY)
            console.log(props.contentMaxDeltaY);
            let displacementRatio = Math.abs(e.deltaY/props.contentMaxDeltaY);				
            let bottom = getPixelsNumber(scroller.current.style.bottom);
            console.log(bottom);
            if((delta < props.contentMaxDeltaY) && e.deltaY > 0) {
                scroller.current.style.bottom = bottom - scrollerMaxDeltaY*displacementRatio + 'px'; 
                console.log(bottom - scrollerMaxDeltaY*displacementRatio);
            } else if(e.deltaY > 0) {
                delta = delta - e.deltaY;	
                let tempDeltaY = props.contentMaxDeltaY - delta;
                displacementRatio = Math.abs(tempDeltaY/props.contentMaxDeltaY);
                scroller.current.style.bottom = (Math.round(getPixelsNumber(scroller.current.style.bottom)) == Math.round(minScrollerBottom) ? scroller.current.style.bottom : ((bottom - scrollerMaxDeltaY*displacementRatio)) + 'px');
                delta = props.contentMaxDeltaY;
            } 
            else if(e.deltaY < 0 && (delta - e.deltaY) >= -e.deltaY) {
                scroller.current.style.bottom = (Math.round(getPixelsNumber(scroller.current.style.bottom)) == Math.round(maxScrollerBottom) ? scroller.current.style.bottom : ((bottom + scrollerMaxDeltaY*displacementRatio)) + 'px');
            } 
            else if(delta < 0) {
                delta = delta - e.deltaY;
                let tempDeltaY =  delta;
                displacementRatio = tempDeltaY/props.contentMaxDeltaY;
                scroller.current.style.bottom = (Math.round(getPixelsNumber(scroller.current.style.bottom)) == Math.round(maxScrollerBottom) ? scroller.current.style.bottom : ((bottom + scrollerMaxDeltaY*displacementRatio)) + 'px');
                delta = 0;
            }
            console.log(delta)
            console.log(e.deltaY)
            console.log(props.contentMaxDeltaY);
        }
        
    })

    let displasmentByClick = 75;
    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }


    // downArrow.current.addEventListener('mouseover', (e)=>{	
    //     e.target.style.borderTop = '10px solid #707070';
    //     e.target.style.cursor = 'pointer';
    // });
    // downArrow.current.htmlElement.addEventListener('mouseout', (e)=>{	
    //     e.target.style.borderTop = '10px solid #93969A';
    // } )
    // downArrow.current.htmlElement.addEventListener('mousedown', (e)=>{
    //     e.target.style.borderTop = '10px solid #2E2E2E';
    // } )
    // downArrow.current.htmlElement.addEventListener('mouseup', (e)=>{
    //     e.target.style.borderTop = '10px solid #707070';
    // } )

    return(
        <div className = 'scroll'>
            <div ref = {upArrow}  className="up-arrow" onClick={()=>{
                let bottom = getPixelsNumber(scroller.current.style.bottom);
                if(delta >= displasmentByClick) {
                let displacementRatio = displasmentByClick/props.contentMaxDeltaY;
                props.container.current.scrollTop = props.container.current.scrollTop - displasmentByClick;
                scroller.current.style.bottom = bottom + scrollerMaxDeltaY*displacementRatio + 'px'; 
                console.log('delta = ' + delta);
                console.log('scrollTop = ' + props.container.current.scrollTop);
                console.log('contentMaxDeltaY = ' + props.contentMaxDeltaY);
                console.log('case - 1')
                }
                if((delta < displasmentByClick &&  props.container.current.scrollTop !== 0)) {
                    let displacementRatio = delta/props.contentMaxDeltaY;
                    props.container.current.scrollTop = props.container.current.scrollTop - displasmentByClick
                    scroller.current.style.bottom = bottom + scrollerMaxDeltaY*displacementRatio + 'px'; 
                    delta = 0;
                    console.log('delta = ' + delta);
                    console.log('scrollTop = ' + props.container.current.scrollTop);
                    console.log('contentMaxDeltaY = ' + props.contentMaxDeltaY);
                    console.log('case - 2')
                    
                } 
                if(delta !== 0) {delta = delta - displasmentByClick;}
                console.log('delta = ' + delta);
                console.log('scrollTop = ' + props.container.current.scrollTop);
                console.log('contentMaxDeltaY = ' + props.contentMaxDeltaY);
                console.log('case - 3')  
            }}
            onMouseOver = {(e)=>{
                e.target.style.borderBottom = '10px solid #707070';
                e.target.style.cursor = 'pointer';
                console.log('over');
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

            <div ref = {downArrow} className="down-arrow" onClick={()=>{
                console.log(props.container.current.scrollTop);
                let bottom = getPixelsNumber(scroller.current.style.bottom);
                console.log('bottom = ' + bottom)
                console.log(props.container.current.scrollTop)
                if((props.contentMaxDeltaY - delta >= displasmentByClick)) {
                    let displacementRatio = displasmentByClick/props.contentMaxDeltaY;
                    props.container.current.scrollTop = props.container.current.scrollTop + displasmentByClick;
                    scroller.current.style.bottom = bottom - scrollerMaxDeltaY*displacementRatio + 'px'; 
                    console.log('delta = ' + delta);
                    console.log('scrollTop = ' + props.container.current.scrollTop);
                    console.log('contentMaxDeltaY = ' + props.contentMaxDeltaY);
                    console.log('case - 1')
                }
                if((props.contentMaxDeltaY - delta < displasmentByClick)) {
                    console.log(props.contentMaxDeltaY);
                    console.log(props.container.current.scrollTop);
                
                    let displacementRatio = (props.contentMaxDeltaY - props.container.current.scrollTop)/props.contentMaxDeltaY;
                    console.log(displacementRatio);
                    props.container.current.scrollTop = props.container.current.scrollTop + displasmentByClick
                    scroller.current.style.bottom = bottom - scrollerMaxDeltaY*displacementRatio + 'px'; 
                    console.log('delta = ' + delta);
                    console.log('scrollTop = ' + props.container.current.scrollTop);
                    console.log('contentMaxDeltaY = ' + props.contentMaxDeltaY);
                    console.log('case - 2')
                } 
                delta = delta + displasmentByClick;
                if(delta >= props.contentMaxDeltaY) {delta = props.contentMaxDeltaY}
                console.log('delta = ' + delta);
                console.log('case - 3')
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