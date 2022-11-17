import './Answer.css'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';


function Answer(){

    const navigate = useNavigate();

    const [coord, setCoord] = useState({
        long: null,
        lat: null,
    })

    const [error, setError] = useState('')

    function handleChange(event) {
        const {name, value} = event.target
        setCoord(prevCoord => ({
            ...prevCoord,
            [name]: value
        }))
    }

    function checkCoord(){
        setError('')
        if(coord.long == 2.226957 && coord.lat == 48.893572){
            navigate('/game');
        }else if(coord.long != 2.226957 && coord.lat != 48.893572){
            setError("Longitude et Latitude sont incorrects")
        }else if (coord.long != 2.226957){
            setError("Longitude est incorrect")
        }else if(coord.lat != 48.893572){
            setError("Latitude est incorrect")
        } 
        
    }

    return(
        <div className='answer-container'>
            <div className='text'>Veuillez entrer les coordonnées du laboratoire <i class="fa-solid fa-location-dot"></i> :</div>
            <div className='input-container'>
                <input
                    type="number"
                    value={coord.long}
                    name="long"
                    placeholder='Longitude'
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={coord.lat}
                    name="lat"
                    placeholder='Latitude'
                    onChange={handleChange}
                />
            </div>
            <div className='button-container'>
                <button
                    onClick={checkCoord}
                >
                    Valider
                </button>
                <h2 className='error'>{error}</h2>
            </div>
        </div>
    );
}

export default Answer