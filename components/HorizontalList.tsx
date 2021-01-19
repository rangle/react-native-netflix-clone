import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {getImagePath, getMedia} from '../helper/api';
import {Movie} from '../helper/types';

const renderItem = ({item}) => (
  <View style={styles.posterContainer}>
    <Image
      source={{
        uri: getImagePath(item.poster_path),
      }}
      style={styles.poster}
    />
  </View>
);

const HorizontalList = ({data}) => {
  const [list, setList] = useState<Movie[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getMedia(data.mediaType, data.id)
      .then(({results}) => {
        setList(results);
      })
      .catch((err) => {
        setError(err);
      });
  }, [data]);

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>{data.title}</Text>
      {error ? (
        <View>
          <Text style={styles.listTitle}>
            Oops, there was a problem loading this list...
          </Text>
        </View>
      ) : (
        <FlatList
          style={styles.horizontalScrollList}
          horizontal={true}
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id + ''}
        />
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

export default HorizontalList;
