import React, {Component} from 'react';
import './CSS/Media-Training-style.css';
import Text from './mainText'

class media extends Component{
    sendRequestHandler = () =>{
        console.log("Request Sent");       
    }
    render(){
        return(
            <main className = 'mediaMain'>
                <div className = 'mediaImage'>
                  <img src = {require('./CSS/Jessy el  murr.png')}/>
                </div>
                <div className = 'mediaMid'>
                  <Text/>
                  <button onClick = {this.sendRequestHandler}>Send Request</button>
                </div>

            </main>    
        );
    }

}

export default media;