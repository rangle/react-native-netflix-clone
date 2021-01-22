import {useDimensions} from '@react-native-community/hooks';
import React from 'react';
import {View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import VideoPlayer from '../components/VideoPlayer';
import {Media} from '../types/Media.type';

interface Props {
  item: Media;
}

const FullPlayer: NavigationFunctionComponent<Props> = ({item}) => {
  const {width, height} = useDimensions().screen;

  return (
    <View style={{flex: 1, backgroundColor: 'red', height, width}}>
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
