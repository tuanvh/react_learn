
import React, { Component } from 'react';

class MiddleColumn extends Component {
  render() {
    return(
		<div className="w3-col m7">
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">Social Media template by w3.css</h6>
              <p contentEditable="true" className="w3-border w3-padding">Status: Feeling Blue</p>
              <button type="button" className="w3-button w3-theme"><i className="fa fa-pencil" /> &nbsp;Post</button> 
            </div>
          </div>
        </div>
      </div>
      <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
        <img src="/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: 60}} />
        <span className="w3-right w3-opacity">1 min</span>
        <h4>John Doe</h4><br />
        <hr className="w3-clear" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="w3-row-padding" style={{margin: '0 -16px'}}>
          <div className="w3-half">
            <img src="/w3images/lights.jpg" style={{width: '100%'}} alt="Northern Lights" className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="/w3images/nature.jpg" style={{width: '100%'}} alt="Nature" className="w3-margin-bottom" />
          </div>
        </div>
        <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like</button> 
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button> 
      </div>
      <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
        <img src="/w3images/avatar5.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: 60}} />
        <span className="w3-right w3-opacity">16 min</span>
        <h4>Jane Doe</h4><br />
        <hr className="w3-clear" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like</button> 
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button> 
      </div>  
      <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
        <img src="/w3images/avatar6.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: 60}} />
        <span className="w3-right w3-opacity">32 min</span>
        <h4>Angie Jane</h4><br />
        <hr className="w3-clear" />
        <p>Have you seen this?</p>
        <img src="/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like</button> 
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button> 
      </div> 
      {/* End Middle Column */}
    </div>
    );
  }
}
export default MiddleColumn;