import './Head.css'

function Head(){
    return(
        <div className="head-container">
            <img src='img/logoblanc.png' alt='Logo' className='logo'/>
            <div className='text'>Vous avez reçu des photos de plusieurs postes provenant des réseaux sociaux. Il semblerait que ces postes soient liés à l’origine du virus. 
            <br/><br/>Trouvez des indices sur le laboratoire d’origine du virus</div>
        </div>
    );
}

export default Head;