import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {globalStyle} from '../styles/global';
import {Recommendation} from '../types/Recommendations.type';
import {getImageUrl, getRecommendations} from '../util/api';
import {useAsync} from '../util/useAsync';

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
});

export default Recommendations;
