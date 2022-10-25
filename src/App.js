import React from 'react';
import './App.css';
import Button from './components/Button.js';
import Count  from './components/Count';
import freecodeCampLogo from './images/freecodecamp-logo.png';

// import React, { useState } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = { numClicks: 0,
      // setNumClicks: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.restartCount = this.restartCount.bind(this);
  }
  
  handleClick() {
    this.setState (({ numClicks }) => ({ numClicks : numClicks + 1}));    
  }

  restartCount(){
    this.setState({ numClicks: 0 })
  }

  render(){
    return (
      <div className='App'>
        <div className='freecodecamp-logo-container'>
        <img 
            className='freecodecamp-logo'
            src={freecodeCampLogo}
            alt='Logo of freeCodeCamp' />
        </div>
        <div className='main-container'>
          <Count numclicks={this.state.numClicks} />
          <Button
          text= 'Click'
          isClickButton= {true}
          handleClick= {this.handleClick} />     
          <Button
          text= 'Restart'
          isClickButton= {false}
          handleClick={this.restartCount} />     
        </div>
      </div>
    );
  }

}
 


export default App;
