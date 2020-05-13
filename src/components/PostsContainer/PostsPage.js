//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import {useState} from "react";
// import data 
import dummyData  from "../../dummy-data";
import LikeSection from "./LikeSection";
import { getDefaultNormalizer } from "@testing-library/react";




      const PostsPage = () => {
  // set up state for your data
const [dataArray, setDataArray] = useState(dummyData);
const allPosts = dataArray.map((arr, index)=>{return <Post 
key = {index} 
// props = {arr}
username={arr.username} 
thumbnailUrl={arr.thumbnailUrl} 
imageUrl={arr.imageUrl} 
likes={arr.likes} 
timestamp={arr.timestamp} 
comments={arr.comments}
/>})



// console.log("allPosts",allPosts);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
    {allPosts}
    </div>
  );
};

export default PostsPage;

