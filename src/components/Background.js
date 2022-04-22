import react, { useEffect, useRef } from "react";
import Title from './Title'
import TopSection from './TopSection'

function createBackground(props) {
    console.log(props.backgroundColor);
    return(
        <div style={{width: `${props.width}`, height: `${props.height}`, backgroundColor: `${props.backgroundColor}`}} >
            <Title color = '#E70012'/>
            <TopSection display = {'flex'} />
        </div>
    )
}

export default createBackground;