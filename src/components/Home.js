import './Home/Home.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/prologue')
    }


    return(
        <div className='welcomescreen' style={{backgroundImage: 'url(img/welcomebackground.png)'}}>
            <div className="container">
                <img src="img/logo.png" alt="logo escape game team"/>
                <br/>
                <div className="play" onClick={handleClick}>Jouer</div>
            </div>
        </div>
    );
}

export default Home