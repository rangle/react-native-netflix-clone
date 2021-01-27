import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {Media} from '../types/Media.type';
import {Await} from '../types/util';
import {useAsync} from '../util/useAsync';
import MediaCard from './MediaCard';

interface Props {
  query: Media | string;
  callback;
}

const MediaResults: NavigationFunctionComponent<Props> = (props) => {
  const {query, callback} = props;
  type callbackReturnType = Await<ReturnType<typeof callback>>;

  const {data, error, run} = useAsync<callbackReturnType>([]);

  useEffect(() => {
    if (query) {
      run(callback(query));
    }
  }, [query, callback, run]);

  return (
    <View style={styles.listContainer}>
      {error ? (
        <Text>Oops, there was a problem loading ...</Text>
      ) : (
        <View style={{...styles.listContainer, justifyContent: 'space-evenly'}}>
          {data.map((el) => (
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
