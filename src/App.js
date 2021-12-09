import React, { useState,useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/header/header';
import MainList from './components/mainList/mainList';
import Search from './components/search/search';
import VideoDetail from './components/video_detail/video_detail';

function App() {
  const [ videos, setVideos] = useState([]); // 영상목록
  const [selectedVideo, setSelectedVideo] = useState(null);  //선택된 비디오

  const selectVideo = (video) =>{
    setSelectedVideo(video)
  }


  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&regionCode=kr&pageToken=CAoQAA&key=AIzaSyAxr5fcog2NjpP1vJZp9H2V68AG52fggM4`, requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));}  

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&regionCode=kr&maxResults=25&key=AIzaSyAxr5fcog2NjpP1vJZp9H2V68AG52fggM4", requestOptions)
      .then(response => response.json())
      .then((result) => {
        setVideos(result.items)
      })
      .catch(error => console.log('error', error));
  },[]);


  return (
    <div className="App">
      <Header/>
      <Search onSearch={search}/>
      {selectedVideo &&(
        <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
        </div>
        )}
        <div className={styles.list}>
        <MainList 
        videos={videos}
        onVideoClick={selectVideo} 
        display={selectedVideo ? "list":"grid"}
        />
        </div>
    </div>
  );
}

export default App;
