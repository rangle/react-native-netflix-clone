import {useDeviceOrientation} from '@react-native-community/hooks';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import YouTube from 'react-native-youtube';
import {Media} from '../types/Media.type';
import {Video} from '../types/Video.type';
import {getVideos} from '../util/api';
import {useAsync} from '../util/useAsync';

interface VideoPlayerProps {
  item: Media;
  autoplay?: boolean;
  autoFullscreen?: boolean;
}

const VideoPlayer = ({
  item,
  autoplay = false,
  autoFullscreen = false,
}: VideoPlayerProps) => {
  const {data: videos, error, run} = useAsync<Video[]>([]);
  const [status, setStatus] = useState('paused');
  const [fullscreen, setFullscreen] = useState(autoFullscreen);
  const orientation = useDeviceOrientation();

  const video = videos.filter((video) => video.type === 'Trailer')[0];

  useEffect(() => {
    if (item) {
      run(getVideos(item));
    }
  }, [item, run]);

  useEffect(() => {
    if (!autoFullscreen) {
      setFullscreen(status === 'playing' && orientation.landscape);
    }
  }, [autoFullscreen, status, orientation]);

  return video && !error ? (
    <YouTube
      videoId={video.key}
      play={status === 'playing' || autoplay}
      fullscreen={fullscreen}
      style={styles.player}
      onChangeState={(e) => setStatus(e.state)}
      onChangeFullscreen={(e) => setFullscreen(e.isFullscreen)}
    />
  ) : error ? (
    <Text>Error: {error.message}</Text>
  ) : (
    <Text>Loading...</Text>
  );
};

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default VideoPlayer;
