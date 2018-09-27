import React, {Component} from 'react';

class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_comment: true
        }
    }
    show_hot = () => {
        if (this.props.flag) {
            return <span className="w3-right w3-opacity">New</span>;
        }
        return <span className="w3-right w3-opacity">Not New</span>;

    }
    postLike = () => {
        alert(this.props.itemName);
    }
    postLike2 = (e) => {
        console.log(e);
    }
    showInfo = (a, flag) => {
        alert(flag);
    }
    showBoxComment = () => {
        if (this.state.show_comment) {
            return <div>
                <textarea style={{width:"100%"}} defaultValue={this.props.itemName} ref={(value)=> { this.txtName = value }} ></textarea>
                <button onClick={()=>this.sendComment()} type="button" style={{float:"right"}} className="w3-button w3-theme-d2 w3-margin-bottom">Send</button>
            </div>;
        }
    }
    btnComment = () => {
        this.setState({ show_comment: !this.state.show_comment});
    }
    sendComment = () => {
        this.setState({ show_comment: !this.state.show_comment});
        console.log(this.txtName.value);
    }
    render() {
        console.log(this.props);
        return (
            <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
                <img src="/w3images/avatar6.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width: 60}} />
                <span className="w3-right w3-opacity">32 min</span><br/>
                {this.show_hot(this.props.flag)}
                <h4>{this.props.itemName}</h4><br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img src="/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom" onClick={ this.postLike }><i className="fa fa-thumbs-up" /> &nbsp;Like</button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={(e)=> this.btnComment(e)}><i className="fa fa-comment" /> &nbsp;Comment</button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={this.showInfo.bind(this, this.props.itemName, this.props.flag)}><i className="fa fa-comment" /> &nbsp;Show info</button>
                <p></p>
                { this.showBoxComment()}
            </div>
        );
    }
}

export default PostItem;