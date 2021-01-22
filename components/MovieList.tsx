import React, {useEffect} from 'react';
import {FlatList, Image, Text, TouchableHighlight, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {slateGray} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {typography} from '../styles/typography';
import {ListOption} from '../types/ListOption.type';
import {Media} from '../types/Media.type';
import {getImageUrl, getMediaList} from '../util/api';
import {useAsync} from '../util/useAsync';

interface Props {
  data: ListOption;
  horizontal?: boolean;
}

const MovieList: NavigationFunctionComponent<Props> = ({
  data,
  horizontal = true,
  componentId,
}) => {
  const {data: list, error, run} = useAsync<Media[]>(null);

  useEffect(() => {
    if (data) {
      run(getMediaList(data.mediaType, data.id));
    }
  }, [data, run]);

  const renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor={slateGray}
      style={{borderRadius: 5}}
      onPress={() =>
        Navigation.push(componentId, {
          component: {
            name: 'Detail',
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

  return error ? (
    <Text style={typography.display5}>
      Oops, there was a problem loading this list...
    </Text>
  ) : (
    <>
      <Text style={typography.display4}>{data.title}</Text>
      <FlatList
        style={{marginBottom: 8}}
        horizontal={horizontal}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ''}
      />
    </>
  );
};

export default MovieList;
