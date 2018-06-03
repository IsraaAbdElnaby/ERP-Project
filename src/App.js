import React, { Component } from 'react';
// import Vedio from './Page/Vedio/VedioRoot';
// import Tv from './Page/tvShow/TvRoot';
// import Event from './Page/Event/EventRoot';
// import Media from './Page/Media/MediaRoot'
import Footer from'./Page/Footer'
import Header from'./Page/Header'
import Introduction from './Page/introMain';
import Public_Speaking from './Page/Public-Speaking'
import Media from './Page/mediaMain'
import './Page/CSS/app_style.css'
import './Page/CSS/global_style.css';
class App extends Component {
  render() {
    return (

      <div className='container'>
      
          <Header/>
        
          <Media/>
          {/* <Public_Speaking/> */}
          {/* <Introduction/> */}
          <Footer/>
          
      
      </div>
    );
  }
}

export default App;
