import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './mainList.module.css';

const MainList = ({videos,onVideoClick}) => {
    return(
        <ul className={styles.videos}>
            {videos.map(video => 
               <VideoItem
               key={video.id}
               video={video}
               onVideoClick={onVideoClick}
               />
             )}
        </ul>
    )
}

export default MainList;