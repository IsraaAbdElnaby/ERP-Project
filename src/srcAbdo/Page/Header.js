import React,{Component} from 'react';
import './CSS/header.css';
import Headertitle from'./Headertitle'

class header extends Component {
    state={
        
    }
    render()
    {
        return (
            <header>
                <div><img src={require('./CSS/Vector-Smart-Object8.png')} className="logo"/></div>
                <Headertitle/>
                {/* <div ><p className="titel"></p></div> */}
                <div ><img src={require('./CSS/Vector-Smart-Object9.png')} className="menue"/></div>
            </header>
        );
    }
}

export default header;