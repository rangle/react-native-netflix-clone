import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Recommendations from '../components/Recommendations';
import {getDetails} from '../helper/api';
import {useAsync} from '../helper/hooks';
import {Media} from '../types/Media.type';
import {MediaDetail as MediaDetailType} from '../types/MediaDetail.type';
import {MediaTypes} from '../types/MediaTypes.enum';

const MediaDetail = (props) => {
  const item = props.item as Media;
  const {data: detail, error, run} = useAsync<MediaDetailType>(null);

  useEffect(() => {
    if (item) {
      run(getDetails(item));
    }
  }, [item, run]);

  const isMovie = item.mediaType === MediaTypes.MOVIE;

  return detail && !error ? (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.videoContainer} />
        <ScrollView>
          <Text>{detail.name}</Text>
          <Text>{detail.tagline}</Text>
          <View>
            <Text>
              {new Date(
                isMovie ? detail.release_date : detail.first_air_date,
              ).getFullYear()}
            </Text>
            <Text>{isMovie ? null : detail.rating}</Text>
            <Text>{isMovie ? null : detail.type}</Text>
          </View>
          <Button title="▶ Play" onPress={() => console.log('Play clicked')} />
          <Button
            title="👇 Download"
            onPress={() => console.log('Download clicked')}
          />
          <Text>{detail.overview}</Text>
          <View>
            <Text>More Like This</Text>
            <View style={styles.recommendationsContainer}>
              <Recommendations {...props} item={item} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  ) : null;
};

MediaDetail.options = {
  topBar: {
    visible: true,
    background: {
      color: '#222',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
  },
  videoContainer: {
    height: '30%', // TODO: fix this
    backgroundColor: '#000',
  },
  recommendationsContainer: {
    paddingLeft: 4,
    paddingRight: 4,
  },
});

export default MediaDetail;
