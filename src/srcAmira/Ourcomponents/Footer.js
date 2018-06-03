import React , {Component} from 'react';
import '../CSS/global_style.css';

class footer extends Component{
    render()
    {
        return (
            <footer>
                <div>
                    <img src={require('../CSS/img/Facsebook.png')} className="share"/>
                    <img src={require('../CSS/img/twetter.png')} className="share"/>
                    <img src={require('../CSS/img/tele.png')} className="share"/>
                </div>
                <div>
                    <img src={require('../CSS/img/Vector-Smart-Object11.png')} className="down"/>
                    <p className="scroll">SCROLL DOWN</p>
                </div>
            </footer>
        );
    }
}

export default footer ;