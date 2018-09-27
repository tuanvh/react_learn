
import React, { Component } from 'react';
import Posts from "./Post/Post";
import PostItem from "./Post/PostItem";

class MiddleColumn extends Component {
    render() {
        return(
            <div className="w3-col m7">
                <Posts/>
                <PostItem itemName="title 1" flag={true}/>
                <PostItem itemName="title 2" flag={false}/>
                <PostItem itemName="title 3" flag={true}/>
            </div>
        );
    }
}
export default MiddleColumn;