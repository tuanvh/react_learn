
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        {/* Footer */}
        <footer className="w3-container w3-theme-d3 w3-padding-16">
          <h5>Footer</h5>
        </footer>
        <footer className="w3-container w3-theme-d5">
          <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </footer>
      </div>
    );
  }
}
export default Header;