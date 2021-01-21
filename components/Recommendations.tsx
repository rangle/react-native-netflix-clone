import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getImageUrl, getRecommendations} from '../helper/api';
import {useAsync} from '../helper/hooks';
import {Recommendation} from '../types/Recommendations.type';

const Recommendations = ({item, componentId}) => {
  const {data: recommendations, error, run} = useAsync<Recommendation[]>([]);

  useEffect(() => {
    if (item) {
      run(getRecommendations(item));
    }
  }, [item, run]);

  const RecommendationCard = ({item}) => (
    <TouchableHighlight
      onPress={() =>
        Navigation.push(componentId, {
          component: {
            name: 'Detail',
            passProps: {item},
          },
        })
      }>
      <View style={styles.posterContainer}>
        <Image
          source={{
            uri: getImageUrl(item.poster_path),
          }}
          style={styles.poster}
        />
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.listContainer}>
      {error ? (
        <Text>Oops, there was a problem loading recommendations...</Text>
      ) : (
        <View style={styles.listContainer}>
          {recommendations.map((el) => (
            <RecommendationCard key={el.id} item={el} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  posterContainer: {
    flex: 1,
    margin: 4,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
});

export default Recommendations;
