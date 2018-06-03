import React , { Component } from 'react';
import '../CSS/global_style.css';
class header extends Component {
    render()
    {
        return (
            <header>
                <div><img src={require('../CSS/img/Vector-Smart-Object8.png')} className="logo"/></div>
                <div ><p className="titel">Events</p></div>
                <div ><img src={require('../CSS/img/Vector-Smart-Object9.png')} className="menue"/></div>
            </header>
        );
    }
}

export default header;