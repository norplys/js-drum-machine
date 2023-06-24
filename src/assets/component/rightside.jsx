import React from "react";
export default class Rightside extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="right-side">
                <div id="title"><img src="src/assets/image/Logo.png" style={{width : 40, height : 40}}></img></div>
                <div className="flex-container">
                    <p>Power</p>
                    <div className="toggle-container" style={this.props.isTurn ? {border : '5px solid red'} : {}}><div className={this.props.isTurn ? 'toggle active' : 'toggle'} onClick={this.props.turn}></div></div>
                </div>



                <div id="display" style={this.props.isTurn ? {backgroundColor : 'lightcyan' , border :  '5px solid cyan'} : {}}>{this.props.text}</div>
                
                <div className="flex-container">
                <p>Volume</p>
                <div id="volume"><input type="range" id="volume-number" onChange={this.props.volumeHandler} min = {0} max = {100}></input></div>
                </div>

                <div className="flex-container">
                <p>Bank</p>   
                <div className="toggle-container" style={this.props.isTurn ? {border : '5px solid magenta'} : {}}><div className={this.props.isPiano ? 'toggle active' : 'toggle'} onClick={this.props.turnPiano}></div></div>
                </div>
            </div>
        )
    }
}