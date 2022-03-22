import React, { useState } from 'react'
import './videoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'
import shareImg from "./assets/share.png";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({likes, shares, messages}) {
  const [liked, setLiked] = useState(false)
  
  return (
    <div className="videoSidebar">
        <div className="videoSidebar__button"> 
          
          {liked ? (<FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />) : 
          (<FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}
          />)}
          <p>{liked ? likes + 1 : likes }</p>
        </div>
        <div className="videoSidebar__button"> 
          <CommentIcon fontSize="large" />
          <p>{messages}</p>
        </div>
        <div className="videoSidebar__button"> 
        <img className="shareIcons" src={shareImg} alt="" />
        <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar