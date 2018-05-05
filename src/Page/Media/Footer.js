import React , {Component} from 'react'
import '../CSS/Media-Training-style.css'

class footer extends Component{
    render()
    {
        return (
            <footer>
                <div>
                    <img src={require('../CSS/Facsebook.png')} className="share"/>
                    <img src={require('../CSS/twetter.png')} className="share"/>
                    <img src={require('../CSS/tele.png')} className="share"/>
                </div>
                <div>
                    <img src={require('../CSS/Vector-Smart-Object11.png')} className="down"/>
                    <p className="scroll">SCROLL DOWN</p>
                </div>
            </footer>
        );
    }
}

export default footer ;