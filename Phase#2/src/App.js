import React, { Component } from 'react';
import Header from './Page/Header';
import TvMain from './Page/VedioTvMain';
import Footer from './Page/Footer';
import BioMain from './Page/BioMain';
import EventMain from './Page/events_main';
import GuestsMain from './Page/Guests_main';
import PhotosMain from './Page/Photos_main';
import IntroMAin from'./Page/introMain';
import PublicMAin from './Page/Public-Speaking';
import MediaMain from './Page/mediaMain';
import './Page/CSS/app_style.css'


class App extends Component {
  state={
    Bio:{
      title:'Biography',
      main:<BioMain/>
    },
    Tv:{
      title:'Tv Show',
      main:<TvMain/>
    },
    Vedio:{
      title:'Vedios',
      main:<TvMain/>
    },
    Event:{
      title:'Event',
      main:<EventMain/>
    },
    Guest:{
      title:'Guests',
      main:<GuestsMain/>
    },
    Photo:{
      title:'Photos',
      main:<PhotosMain/>
    },
    Intro:{
      title:'Hello!',
      main:<IntroMAin/>
    },
    Public:{
      title:'Public Speaking',
      main:<PublicMAin/>
    },
    Media:{
      title:'Media',
      main:<MediaMain/>
    },
  };

  render() {
    return (
      <div className="container">
        <Header>{this.state.Intro.title}</Header>
        {this.state.Intro.main}
        <Footer/>
      </div>
    );
  }
}

export default App;
