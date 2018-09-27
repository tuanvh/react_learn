import React, {Component} from 'react';

class Posts extends Component {
    render() {
        return (
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
        );
    }
}

export default Posts;