import React, { Component } from 'react';
import Tooltip from './Tooltip';

class App extends Component {
  render() {
    return (
      <div style={{fontSize: '20px', color: '#555', margin: '60px'}}>
        <span>THAT'S NO </span>
        <Tooltip tiptext="DEATH STAR">
          <span style={{color: '#a0a0a0'}}>MOON</span>
        </Tooltip>
      </div>
    );
  }
}

export default App;
