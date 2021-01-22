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
import VideoPlayer from '../components/VideoPlayer';
import {black, charcoal} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {typography} from '../styles/typography';
import {Media} from '../types/Media.type';
import {MediaDetail as MediaDetailType} from '../types/MediaDetail.type';
import {getDetails} from '../util/api';
import {useAsync} from '../util/useAsync';

const MediaDetail = (props) => {
  const item = props.item as Media;
  const {data: detail, error, run} = useAsync<MediaDetailType>(null);

  useEffect(() => {
    if (item) {
      run(getDetails(item));
    }
  }, [item, run]);

  // const isMovie = item.mediaType === MediaTypes.MOVIE;

  return detail && !error ? (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.videoContainer}>
          <VideoPlayer item={item} />
        </View>
        <ScrollView contentContainerStyle={globalStyle.container}>
          <Text style={typography.display2}>{detail.name || detail.title}</Text>
          <Text style={typography.display6}>{detail.tagline}</Text>
          {/* <View>
            <Text>
              {new Date(
                isMovie ? detail.release_date : detail.first_air_date,
              ).getFullYear()}
            </Text>
            <Text>{isMovie ? null : detail.rating}</Text>
            <Text>{isMovie ? null : detail.type}</Text>
          </View> */}
          <Button title="▶ Play" onPress={() => console.log('Play clicked')} />
          <Button
            title="👇 Download"
            onPress={() => console.log('Download clicked')}
          />
          <Text style={typography.display6}>{detail.overview}</Text>
          <View style={{flex: 1}}>
            <Text style={{...typography.display4, marginBottom: 8}}>
              More Like This
            </Text>
            <Recommendations {...props} item={item} />
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
      color: charcoal,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: charcoal,
    flex: 1,
  },
  videoContainer: {
    height: '30%',
    minHeight: 200,
    backgroundColor: black,
  },
});

export default MediaDetail;
