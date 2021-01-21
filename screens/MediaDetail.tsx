import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Recommendations from '../components/Recommendations';
import {useItemDetail} from '../helper/hooks';
import {Media} from '../types/Media.type';
import {MediaTypes} from '../types/MediaTypes.enum';

const MediaDetail = (props) => {
  const item = props.item as Media;
  const [detail, error] = useItemDetail(item);
  console.log({detail});

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
            <View style={{paddingLeft: 4, paddingRight: 4}}>
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
});

export default MediaDetail;
