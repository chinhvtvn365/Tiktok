import { useEffect, useState } from 'react';
import axios from './axios';
import './App.css';
import Video from './video';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/v2/posts')
      setVideos(response.data)
      return response
    }
    fetchData()
  }, [])

  console.log(videos)

  return (
    <div className="app">
      <div className="app__video">
        {videos.map(({url, chanel, description, song, likes, shares, messages, _id}) => (
          <Video
            key={_id}
            url={url}
            chanel={chanel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}

        </div>
    </div>
  );
}

export default App;
