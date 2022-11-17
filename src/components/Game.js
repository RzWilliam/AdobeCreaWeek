import React, {useState} from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import './Game/Game.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function Game(){

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const unityContext = new UnityContext({
        loaderUrl: "Mygame/Build/BuildWithoutCompression.loader.js",
        dataUrl: "Mygame/Build/BuildWithoutCompression.data",
        frameworkUrl: "Mygame/Build/BuildWithoutCompression.framework.js",
        codeUrl: "Mygame/Build/BuildWithoutCompression.wasm",
    });

    function handleSubmit(){
      if(password == '4Vru/b5c$6tqsEd@SCTym%6b7'){
        navigate('/cdeb');
      } else{
        setError('Mot de passe incorrect')
      }
    }

    function handleChange(event){
      setPassword(event.target.value)
    }
    
    return (
        <div className='game-container'>  
          <Unity
            className='game'
            unityContext={unityContext}
            tabIndex={1}
          />
          <input
            tabIndex={2}
            type="text" 
            placeholder='Mot de passe'
            value={password}
            onChange={handleChange}
            name="message"
          />
          <button
            onClick={handleSubmit}
          >
          Valider  
          </button>
          <div className='error'>{error}</div>
        </div>
      );
}

export default Game;