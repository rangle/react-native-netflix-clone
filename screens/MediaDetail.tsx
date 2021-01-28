import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Button from '../components/Button';
import MediaResults from '../components/MediaResults';
import VideoPlayer from '../components/VideoPlayer';
import {black, charcoal} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {typography} from '../styles/typography';
import {Media} from '../types/Media.type';
import {MediaDetail as MediaDetailType} from '../types/MediaDetail.type';
import {getDetails, getRecommendations} from '../util/api';
import {useAsync} from '../util/useAsync';

interface Props {
  item: Media;
}

const MediaDetail: NavigationFunctionComponent<Props> = (props) => {
  const {data: detail, error, run} = useAsync<MediaDetailType>(null);

  const {item, componentId} = props;

  useEffect(() => {
    if (item) {
      run(getDetails(item));
    }
  }, [item, run]);

  return detail && !error ? (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.videoContainer}>
          <VideoPlayer item={item} autoplay={true} />
        </View>
        <ScrollView contentContainerStyle={globalStyle.container}>
          <Text style={typography.display2}>{detail.name || detail.title}</Text>
          <Text style={typography.display6}>{detail.tagline}</Text>
          <View style={{marginTop: 16, marginBottom: 16}}>
            <Button
              title="▶ Play"
              onPress={() =>
                Navigation.push(componentId, {
                  component: {
                    name: 'com.netflixClone.Player',
                    passProps: {item},
                  },
                })
              }
            />
          </View>
          <View style={{}}>
            <Text style={typography.display6}>{detail.overview}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{...typography.display4, marginTop: 16, marginBottom: 8}}>
              More Like This
            </Text>
            <MediaResults
              {...props}
              callback={() => getRecommendations(item)}
            />
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
