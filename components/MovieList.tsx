import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getImageUrl, getMediaList} from '../util/api';
import {useAsync} from '../util/useAsync';
import {Media} from '../types/Media.type';
import {typography} from '../styles/typography';
import {globalStyle} from '../styles/global';

const MovieList = ({data, horizontal = true, componentId}) => {
  const {data: list, error, run} = useAsync<Media[]>(null);

  useEffect(() => {
    if (data) {
      run(getMediaList(data.mediaType, data.id));
    }
  }, [data, run]);

  const renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor="#454545"
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

  return (
    <View style={styles.listContainer}>
      {error ? (
        <Text style={typography.display5}>
          Oops, there was a problem loading this list...
        </Text>
      ) : (
        <>
          <Text style={typography.display4}>{data.title}</Text>
          <FlatList
            style={styles.horizontalScrollList}
            horizontal={horizontal}
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id + ''}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  horizontalScrollList: {
    flex: 1,
    marginBottom: 8,
  },
});

export default MovieList;
