import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {typography} from '../styles/typography';
import {Await} from '../types/util';
import {getRecommendations, getSearch, getTrending} from '../util/api';
import {useAsync} from '../util/useAsync';
import MediaCard from './MediaCard';

type callbackType =
  | ReturnType<typeof getRecommendations>
  | ReturnType<typeof getSearch>
  | ReturnType<typeof getTrending>;

interface Props {
  callback: () => callbackType;
}

const MediaResults: NavigationFunctionComponent<Props> = (props) => {
  const {callback} = props;
  type callbackReturnType = Await<ReturnType<typeof callback>>;

  const {data, error, run} = useAsync<callbackReturnType>([]);

  useEffect(() => {
    if (callback) {
      run(callback());
    }
  }, [callback, run]);

  return (
    <View style={styles.listContainer}>
      {error ? (
        <Text style={typography.display5}>
          Oops, there was a problem loading ...
        </Text>
      ) : (
        <View style={{...styles.listContainer, justifyContent: 'space-evenly'}}>
          {data
            .filter((el) => el.poster_path != null)
            .map((el) => (
              <MediaCard {...props} key={el.id} item={el} />
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

export default MediaResults;
