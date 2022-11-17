import React from "react";
import './Post.css'

function Post(props){

    const [isOpen, setIsOpen] = React.useState(false);

    function toggleIsOpen() {
		setIsOpen(!isOpen);
	};

    return (
        <>
            {isOpen ?
                <div className="overlay">
                    <span onClick={toggleIsOpen} className="close-post"><i class="fa-solid fa-xmark"></i></span>
                    <div className="post">
                        <img src={props.item.imageUrl} alt=""/>
                        <div className="about-part">
                            <div className="head">
                                <img src={props.item.profileUrl} className="profil-picture" alt=""/>
                                <div className="profil">
                                    <h3 className="username">{props.item.username}</h3>
                                </div>
                                <p className="likes">{props.item.likes} <i class="fa-solid fa-heart heart"></i></p>
                            </div>
                            <div className="body">
                                
                                <div className="comment-container">
                                    <img src={props.item.profileUrl} className="profil-picture" alt=""/>
                                    <div>
                                        <h3 className="username">{props.item.username}</h3>
                                        <p dangerouslySetInnerHTML={ { __html: props.item.description } }></p>
                                    </div>
                                </div>
                                <p className="comments-counter">{props.item.comments}<i class="fa-solid fa-comment-dots"></i></p>
                            </div>
                        </div> 
                    </div>
                    
                </div>
            : ''}
            <div className="minify-post">
                <img src={props.item.imageUrl} alt="" onClick={toggleIsOpen}></img>
            </div>
            
            
            
        </>
    );
}

export default Post;