/* eslint-disable */
import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Trailer = ({navigation: {goBack}}) => {
  return (
    <VideoPlayer
      source={{
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      }}
      controlTimeout={3000}
      tapAnywhereToPause={true}
      onBack={() => {
        goBack();
      }}
      onEnd={() => goBack()}
    />
  );
};

export default Trailer;
