import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
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
      style={styles.touchable}
      onPress={() => onPress(item)}>
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

  const onPress = (item) =>
    Navigation.push(componentId, {
      component: {
        name: 'com.netflixClone.Detail',
        passProps: {item},
      },
    });

  return error ? (
    <Text style={typography.display5}>
      Oops, there was a problem loading this list...
    </Text>
  ) : (
    <>
      <Text style={typography.display4}>{data.title}</Text>
      <FlatList
        style={styles.flatList}
        horizontal={horizontal}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id + ''}
      />
    </>
  );
};
const styles = StyleSheet.create({
  flatList: {
    marginBottom: 8,
  },
  touchable: {
    borderRadius: 5,
  },
});

export default MovieList;
