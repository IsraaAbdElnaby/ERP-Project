import React , { Component } from 'react'
import './CSS/global_style.css'

// import Headertitle from'./Headertitle'

class header extends Component {
    render()
    {
        return (
            <header>
                <div><img src={require('./CSS/Vector-Smart-Object8.png')} className="logo"/></div>
                <div className="title"> <p>hello</p> </div>
                <div ><img src={require('./CSS/Vector-Smart-Object9.png')} className="menue"/></div>
            </header>
        );
    }
}

export default header;