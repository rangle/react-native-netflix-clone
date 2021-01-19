import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {getImageUrl} from '../helper/api';
import {useMediaList} from '../helper/hooks';

const renderItem = ({item}) => (
  <View style={styles.posterContainer}>
    <Image
      source={{
        uri: getImageUrl(item.poster_path),
      }}
      style={styles.poster}
    />
  </View>
);

const MovieList = ({data, horizontal = true}) => {
  const [list, error] = useMediaList(data);

  return (
    <View style={styles.listContainer}>
      {error ? (
        <Text style={styles.listTitle}>
          Oops, there was a problem loading this list...
        </Text>
      ) : (
        <>
          <Text style={styles.listTitle}>{data.title}</Text>
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
  listTitle: {
    fontFamily: 'Helvetica',
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    lineHeight: 26,
    marginTop: 16,
    marginBottom: 8,
  },
  posterContainer: {
    paddingRight: 4,
  },
  poster: {
    width: 100,
    height: 150,
  },
});

export default MovieList;
