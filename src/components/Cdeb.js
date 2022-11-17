import React from 'react'
import Post from './Cdeb/Post'
import data from './Cdeb/postData'
import Head from './Cdeb/Head'
import Answer from './Cdeb/Answer'
import './Cdeb/Cdeb.css'

function Cdeb(){
    const posts = data.map(item =>{
        return(
            <Post
            key={item.id}
            item={item}
            />
        )
    })
    return(
        <>
            <section className='cdeb-container'>
                <Head/>
                <div className='posts-container'>
                    {posts}
                </div>
                <Answer/>
            </section>
        </>
    )
}

export default Cdeb;