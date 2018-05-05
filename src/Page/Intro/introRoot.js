import React , { Component } from 'react'
import './../CSS/Intro-style.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';


class root extends Component{
    render()
    {
        return(
            <div className='container'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default root;