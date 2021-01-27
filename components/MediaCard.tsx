import React from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {slateGray} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {getImageUrl} from '../util/api';

interface Props {
  item: any;
}

const MediaCard: NavigationFunctionComponent<Props> = ({item, componentId}) => (
  <TouchableHighlight
    underlayColor={slateGray}
    onPress={() =>
      Navigation.push<Props>(componentId, {
        component: {
          name: 'com.netflixClone.Detail',
          passProps: {item},
        },
      })
    }>
    <View style={globalStyle.posterContainer}>
      <Image
        source={{
          uri: getImageUrl(item.poster_path),
        }}
        style={globalStyle.poster}
      />
    </View>
  </TouchableHighlight>
);

export default MediaCard;
