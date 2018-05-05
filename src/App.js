import React, { Component } from 'react';
import Vedio from './Page/Vedio/VedioRoot';
import Tv from './Page/tvShow/TvRoot';
import Event from './Page/Event/EventRoot';
import Media from './Page/Media/MediaRoot'

let arrowStyle;
class App extends Component {
  render() {
    return (

      <div className='container'>
      {/* <Vedio/>
      <Tv/>
      <Event/> */
      <Media/>}
      </div>
    );
  }
}

export default App;
