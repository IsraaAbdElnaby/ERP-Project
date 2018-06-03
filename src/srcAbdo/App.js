import React, { Component } from 'react';
import Header from './Page/Header';
import Main from './Page/VedioTvMain'
import Footer from './Page/Footer';
import BioMain from './Page/BioMain';
import './Page/CSS/app_style.css'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <BioMain/>
        <Footer/>
      </div>
    );
  }
}

export default App;
