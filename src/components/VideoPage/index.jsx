import React from 'react';
import ReactPlayer from 'react-player';

import {  Container} from './style';

const VideoPage = () => {
const src = 'https://youtu.be/mWSVB7FMmoE' ;

  return (
    <Container>
      lkjxlkvjz
      <ReactPlayer 
      controls 
      width={'1000px'} 
      height={'600px'} 
      url={`${src}`}></ReactPlayer>
      
    </Container>
    

  )
}

export default VideoPage;

