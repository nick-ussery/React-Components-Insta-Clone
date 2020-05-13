// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [comments, addComments] = useState(props.comments);
const submitComment= ()=>{

}

const allComments= props.comments.map((arr, index)=>{
  return <Comment key={index}
  username={arr.username}
  text= {arr.text}
  />
})
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
    {allComments}
    <div className="timestamp">{props.timestamp}</div>
      <CommentInput 
      
      />
    </div>
  );
};

export default CommentSection;
