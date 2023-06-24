import React from "react";

export default class Drumpad extends React.Component{
    constructor(){
        super();
    this.playSound = this.playSound.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    componentDidMount(){
        window.addEventListener('keydown', event => {
            if(event.keyCode === this.props.code && this.props.isTurn === true){
                this.playSound();
                this.props.handleChange(this.props.trigger);
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', event => {
            if(event.keyCode === this.props.code){
                console.log(event.key);
                this.playSound();
                this.props.handleChange(this.props.trigger);
            }
        });
    }
    playSound(){
        const sound = document.getElementById(this.props.keys);
        sound.currentTime = 0;
        sound.volume = this.props.volume / 100;
        this.props.isTurn ? sound.play() : '';
    }
    handleKeyDown(event){
        if(event.keyCode === this.props.code){
            this.playSound();
        }
    }
    render(){
        return(
            <button onKeyDown={this.handleKeyDown} className = {this.props.isTurn ? 'shadow' : ''} style={this.props.isTurn ? {backgroundColor : 'magenta' , border :  '5px solid blue'} : {}} onClick= {this.props.isTurn ? () => {{this.props.handleChange(this.props.text)}; {this.playSound()};} : () => {}} >{this.props.keys}<audio id={this.props.keys} src={this.props.link}></audio></button>
        )
    }
}