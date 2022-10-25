import React from "react";
import '../stylessheets/Button.css';

class Button extends React.Component{
    render(){
        return(
            <button 
                className={ this.props.isClickButton ? 'click-button' : 'init-button' }
                onClick={this.props.handleClick}>
                {this.props.text}
            </button>
        )
    }
}


export default Button;