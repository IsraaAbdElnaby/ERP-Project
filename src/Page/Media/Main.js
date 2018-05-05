import React, {Component} from 'react';
import './../CSS/Media-Training-style.css';
import Text from './../mainText'

class main extends Component{
    render(){
        return(
            <main>
                <div className = 'mid'>
                <Text/>
                </div>
                <div className = 'image'>
                <img src = {require('../CSS/Jessy el  murr.png')}/>
                </div>
            </main>    
        );
    }

}

export default main;