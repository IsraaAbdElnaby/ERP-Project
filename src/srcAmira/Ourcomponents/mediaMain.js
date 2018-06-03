import React, {Component} from 'react';
import '../CSS/Media-Training-style.css';
import Text from './mainText'

class media extends Component{
    render(){
        return(
            <main className = 'mediaMain'>
                <div className = 'mediaImage'>
                  <img src = {require('../CSS/img/jes1.png')}/>
                </div>
                <div className = 'mediaMid'>
                  <Text/>
                </div>

            </main>    
        );
    }

}

export default media;