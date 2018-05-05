import React , { Component } from 'react'
import '../CSS/event_style.css'

import Headertitle from'./Headertitle'

class header extends Component {
    render()
    {
        return (
            <header>
                <div><img src={require('../CSS/Vector-Smart-Object8.png')} className="logo"/></div>
                <Headertitle/>
                <div ><img src={require('../CSS/Vector-Smart-Object9.png')} className="menue"/></div>
            </header>
        );
    }
}

export default header;