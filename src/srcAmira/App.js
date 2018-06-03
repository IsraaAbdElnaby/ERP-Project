import React, { Component } from 'react';
import Header from './Ourcomponents/Header';
import Footer from './Ourcomponents/Footer';
import Guests_main from './Ourcomponents/Guests_main';
 import Photos_main from './Ourcomponents/Photos_main';
 import Event_main from './Ourcomponents/events_main';
import Media_main from './Ourcomponents/mediaMain';
import  './CSS/app_style.css';
class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Header/>
        <Event_main/>
        <Footer/>
      </div>
    );
  }
}


export default App;