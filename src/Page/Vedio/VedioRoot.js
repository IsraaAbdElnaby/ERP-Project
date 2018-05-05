import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../CSS/vedio.css';
class root extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Main/>
      </div>
    );
  }
}
export default root;