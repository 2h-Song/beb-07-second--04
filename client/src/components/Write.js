import axios from 'axios';
import React, { useState } from 'react';
import dummyData from "../resources/dummyData"
import "./Write.css"

export default function Write() {
  const [tweetInfo, setTweetInfo] = useState({
    post_title: "",
    post_contents: "",
    user_nickname: "",
    post_createdAt: ""
  });
  const handleChange = (key) => (event)=> {
    setTweetInfo({...tweetInfo, [key]:event.target.value});
  }

  const handleSubmit = (event) => {
    let isPostSuccess = false
    event.preventDefault();
    if(tweetInfo.post_contents){
      axios.post("http://localhost:8080/posts/upload", tweetInfo)
      .then((result)=>{
        console.log(result.data.status)
        result.data.status==="success"? isPostSuccess=true : isPostSuccess=false
      })
      .then(()=>{
        isPostSuccess ? window.location.reload() : console.log()
      })
    }
  }
  function validateForm(){
    return tweetInfo.post_contents.length>0
}
  return (
    <div className='write'>
      <div >
        {dummyData.map((e)=>{
          return(
            <div id='profile'>
              <img id="profPic" src={e.imgUrl} alt="profile"/>
              <div id="name">{e.user_nickname}</div>
              <div id="userid">{`@`+ e.user_id}</div>
            </div>
          )
        })}
      </div>
      <div id="tweetForm">
        <form onSubmit={handleSubmit} id="form">
          <textarea placeholder="write something..." value={tweetInfo.post_contents} onChange={handleChange} id="tweetbox"/>
          <button type="submit" id="tweetBTN" disabled={!validateForm()}>post</button>
        </form>
      </div>
      
    </div>
    
  );
}
