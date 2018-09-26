
import React, { Component } from 'react';
import LeftColumn from './LeftColumn/LeftColumn';
import RightColumn from './RightColumn/RightColumn';
import MiddleColumn from './MiddleColumn/MiddleColumn';

class Content extends Component {
  render() {
    return(
      <div className="w3-container w3-content" style={{maxWidth: 1400, marginTop: 80}}>    
        {/* The Grid */}
        <div className="w3-row">
          {/* Left Column */}
          <LeftColumn />
          {/* Middle Column */}
          <MiddleColumn />
          {/* Right Column */}
          <RightColumn />
          {/* End Grid */}
        </div>
      </div>
    );
  }
}
export default Content;