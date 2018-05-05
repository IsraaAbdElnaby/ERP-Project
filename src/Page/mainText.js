import React, { Component } from 'react';
import './CSS/text.css';
import Aux from './globalClass/Aux'

class text extends Component{
  render(){
    return(
    <Aux>
    <div className = 'text1'>
      <p>Jessy El Murr</p> 
    </div>
    <div className = 'text2'>
    <p>International Journalist & Speaker</p>
    </div>
    <img src = {require('./CSS/load.png')} className = 'smallImg'/>
    <div className = 'text3'>
    <p>Jessy El Murr is a multimedia journalist, speaker and</p>
    <p>moderator with a special interest in social media</p>
    <p>and arab youth.</p>
    </div>
    </Aux>
    );
  }
}

export default text;