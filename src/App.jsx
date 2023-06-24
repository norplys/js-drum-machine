import React from 'react'
import './App.scss'
import Drumpad from './assets/component/drum-pad';
import Rightside from './assets/component/rightside'
import { heaterKit,pianoKit } from "./assets/bank";




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      displaytxt : '',
      isOn : false, 
      isPiano : false,
      displayTimeoutId : 0,
      volume : 50,
    }
  this.reset = this.reset.bind(this);

  }
  reset(){
    this.setState({displaytxt : ''})
  }

  display(event){
    clearTimeout(this.state.displayTimeoutId);
    const timeoutId = setTimeout(this.reset, 1000);
    this.setState(
      {displaytxt : event,
      displayTimeoutId : timeoutId}
    );
  }

  turnHandler(){
    this.setState({
      isOn : !this.state.isOn
    })}
  
  bankHandler(){
    this.setState({
      isPiano : !this.state.isPiano
    })
  }
changeVolume(event){
  event.preventDefault;
  clearTimeout(this.state.displayTimeoutId);
  const timeoutId = setTimeout(this.reset, 1000);
  if(this.state.isOn){
  this.setState({
    volume : event.target.value,
    displaytxt : event.target.value
  })}else{
    this.setState({
      volume : event.target.value
    })
  }
}
  
  render(){
  let audioClips = heaterKit;
  this.state.isPiano ? audioClips = pianoKit : audioClips = heaterKit;
    return(
    <div id="drum-machine" style={this.state.isOn ? {border : '5px solid orange'} : {}}>
      <div id="drum-pad">
      {audioClips.map(clip => {
        return <Drumpad trigger ={clip.keyTrigger} volume = {this.state.volume} isTurn = {this.state.isOn} handleChange = {this.display.bind(this)}  keys = {clip.keyTrigger} key = {clip.id} text = {clip.id} link = {clip.url} code = {clip.keyCode}/>
      })}
      </div>
      <Rightside volumeHandler = {this.changeVolume.bind(this)} turnPiano = {this.bankHandler.bind(this)} isPiano = {this.state.isPiano} turn = {this.turnHandler.bind(this)} text = {this.state.displaytxt} isTurn = {this.state.isOn}/>
    </div>
);
}
}
export default App
