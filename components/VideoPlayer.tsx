import {useDeviceOrientation} from '@react-native-community/hooks';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import YouTube from 'react-native-youtube';
import {red} from '../styles/colors';
import {Media} from '../types/Media.type';
import {Video} from '../types/Video.type';
import {getVideos} from '../util/api';
import {useAsync} from '../util/useAsync';

interface Props {
  item: Media;
  autoplay?: boolean;
  autoFullscreen?: boolean;
  showFullscreenButton?: boolean;
}

const VideoPlayer = ({
  item,
  autoplay = false,
  autoFullscreen = false,
  showFullscreenButton = true,
}: Props) => {
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
      showFullscreenButton={showFullscreenButton}
      controls={2}
      modestbranding={true}
      showinfo={false}
      rel={false}
      style={styles.player}
      onChangeState={(e) => setStatus(e.state)}
      onChangeFullscreen={(e) => setFullscreen(e.isFullscreen)}
    />
  ) : error ? (
    <Text>Error: {error.message}</Text>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={fullscreen ? 'large' : 'small'} color={red} />
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    height: '100%',
  },
});

export default VideoPlayer;
