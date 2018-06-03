import React,{Component} from 'react';
import  '../CSS/photos_style.css';


class Photo_main extends Component
{
    render()
    {
       return(
        <main className="photo_main">
            <div>
                <img src={require("../CSS/img/jes1.png")}/>
                <img src={require("../CSS/img/jes1.png")}/>
                <img src={require("../CSS/img/jes1.png")}/>
                <img src={require("../CSS/img/jes1.png")}/>
            </div>
        </main>
       );
    }
}
export default Photo_main;