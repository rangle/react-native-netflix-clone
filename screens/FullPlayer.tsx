import {useDimensions} from '@react-native-community/hooks';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import Orientation from 'react-native-orientation-locker';
import VideoPlayer from '../components/VideoPlayer';
import {Media} from '../types/Media.type';

interface Props {
  item: Media;
}

const FullPlayer: NavigationFunctionComponent<Props> = ({item}) => {
  const {width, height} = useDimensions().screen;

  useEffect(() => {
    Orientation.lockToLandscape();
    return () => Orientation.lockToPortrait();
  }, []);

  return (
    <View style={{flex: 1, height, width}}>
      <VideoPlayer item={item} autoplay={true} autoFullscreen={true} />
    </View>
  );
};

FullPlayer.options = {
  topBar: {
    title: {
      text: 'Player',
    },
  },
};

export default FullPlayer;
