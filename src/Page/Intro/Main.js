import React, {Component} from 'react';
import './../style/Intro-style.css';
import Text from './mainText'

class intro extends Component{
    render(){
        return(
            <main>
                <div className = 'mid'>
                   <Text/>
                   <div class = "image">
                   <img src = {require('../CSS/intro.png')}/>
                   </div>
                </div>
            </main>    
        );
    }

}

export default intro;