import React, {useRef, useState} from 'react'
import './video.css'
import VideoFooter from './videoFooter'
import VideoSidebar from './videoSidebar'

function Video({url, likes, shares, messages, chanel, description, song}){
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return(
        <div className="video">
            <video 
            onClick={handleVideoPress}
            loop
            ref = {videoRef}
            className="video__player"
            src={url}
            ></video>
            <VideoFooter chanel={chanel} description={description} song={song}/>
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}
export default Video
