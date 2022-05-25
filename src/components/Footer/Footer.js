import react, { useEffect, useRef, useState } from "react";
import React from 'react';
import BlockList from '../BlockList/BlockList'
import BlockDesription from '../BlockDescription/BlockDesription'
import './Footer.css'


function Footer(props) { 
    return(
        <footer id ="footer">
            <div className="double-button">
                <button className="clean-button">Очистить</button>
                <button className="save-button">Сохранить</button>
            </div>
        </footer>
    )
}

export default Footer;