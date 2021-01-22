import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {slateGray} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {Media} from '../types/Media.type';
import {Recommendation} from '../types/Recommendations.type';
import {getImageUrl, getRecommendations} from '../util/api';
import {useAsync} from '../util/useAsync';

interface Props {
  item: Media;
}

const Recommendations: NavigationFunctionComponent<Props> = ({
  item,
  componentId,
}) => {
  const {data: recommendations, error, run} = useAsync<Recommendation[]>([]);

  useEffect(() => {
    if (item) {
      run(getRecommendations(item));
    }
  }, [item, run]);

  const RecommendationCard = ({item}) => (
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

  return (
    <View style={styles.listContainer}>
      {error ? (
        <Text>Oops, there was a problem loading recommendations...</Text>
      ) : (
        <View style={{...styles.listContainer, justifyContent: 'space-evenly'}}>
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
