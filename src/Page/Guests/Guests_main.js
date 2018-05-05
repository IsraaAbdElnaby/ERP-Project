import React , {Component} from 'react';
import '../CSS/guests_style.css';


class Pic extends Component{
    render(probs)
    {
        return(
            <img src={require("../CSS/Photo1.png")}/>
        );
    }
}

class Pics extends Component {
    render()
    {
       return(
            <div class="pics">
                <Pic/>
                <Pic/>
                <Pic/>
                <Pic/>
                <Pic/>
                <Pic/>
                <Pic/>
                <Pic/>
                <Pic/>
            </div>
       ); 
    }
}

class Info_rigt extends Component{
    render()
    {
        return(
            <div className="info_rigt">
                <div className="guest_job"> Movie actor</div>
                <div className="guest_info">
                    Learn ipsiom ijdfi  kfo to change to make some behavior to match this text and display to vjiurv evoirj kfvfn oreiorij roj foi jp tobpro r prprpto pr prt pjtprwpotpp  topr 
                </div>
           </div>
        );
    }
}

class Main_top extends Component
{
    render()
    {
        return(
            <div className="main_top">
                <Pics/>
                <div className="info">
                    <div className="info_left"> 
                        <div className="guest_name">Rose Leslie </div>
                    </div>
                    <Info_rigt/>
                </div>
            </div>
        );
    }
}

function Name(probs)
{
    return (<div>{probs.name} </div>);
}

class Main_bottom extends Component
{
    render()
    {
        return(
            <div className="main_bottom"> 
                <div className="names">
                    <Name name="Rose Leslie"/>
                    <Name name="Obama"/>
                    <Name name="Rose Leslie"/>
                    <Name name="Obama"/>
                    <Name name="Rose Leslie"/>
                    <Name name="Obama"/>
                    <Name name="Rose Leslie"/>
                    <Name name="Obama"/>
                </div>
                <div className="more"><h5> More Guests</h5></div>
            </div>
        );
    }
}

class guests_main extends Component
{
    render()
    {
        return(
            <main>
                <Main_top/>
                <Main_bottom/>
            </main>
        );
    }
}

export default guests_main;