import './Prologue/Prologue.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import React, {useState} from 'react'

function Prologue(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/cdeb')
    }

    return(
        <div className="prologue back-row-toggle splat-toggle">
            <div className="rain front-row"></div>
            <div className="rain back-row"></div>
            <div className="center-container">
                <h1>Prologue</h1>
                <div id="typedtext"></div>
                <br/>
                <br/>
                <div className="inspectbutton" onClick={handleClick}>Inspecter les fichiers</div>
            </div>
        </div>
    )
}


export default Prologue