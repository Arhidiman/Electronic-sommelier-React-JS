import react, { useEffect, useRef, useState } from "react";
import React from 'react';
import BlockList from '../BlockList/BlockList'
import BlockDesription from '../BlockDescription/BlockDesription'
import './BottomSectionStyle.css'
import {decorations, tags} from '../../inputData.js'

function CreateSection(props) { 
    
    //block-list constants
    const [contentMarginTop, setContentMarginTop] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [contentHeight, setContentHeight ] = useState(0);
    const [contentMaxDeltaY, setContentMaxDeltaY] = useState(0);
    const [ratio, setRatio] = useState(0);

    return(
        <section id = 'bottom-section' style = {{display: `${props.display}`, width: `${props.width}`}}>
            <BlockList 
                title = 'Украшения' 
                subtitle = 'видов' 
                list = {decorations}
                isCheckbox = {true}
                setContentMarginTop = {setContentMarginTop} contentMarginTop = {contentMarginTop}
                setContainerHeight = {setContainerHeight} containerHeight = {containerHeight}
                setContentHeight = {setContentHeight} contentHeight = {contentHeight}
                setContentMaxDeltaY = {setContentMaxDeltaY} contentMaxDeltaY = {contentMaxDeltaY}
                setRatio = {setRatio} ratio = {ratio}
            />

            <BlockList 
                title = 'Тэги' 
                subtitle = 'тэгов' 
                list = {tags}
                isCheckbox = {true}
                setContentMarginTop = {setContentMarginTop} contentMarginTop = {contentMarginTop}
                setContainerHeight = {setContainerHeight} containerHeight = {containerHeight}
                setContentHeight = {setContentHeight} contentHeight = {contentHeight}
                setContentMaxDeltaY = {setContentMaxDeltaY} contentMaxDeltaY = {contentMaxDeltaY}
                setRatio = {setRatio} ratio = {ratio}
            />
            <BlockDesription 
                title = 'Описание' 
            />
        </section>
    )
}

export default CreateSection;