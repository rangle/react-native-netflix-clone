import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {typography} from '../styles/typography';
import {Media} from '../types/Media.type';
import {getImageUrl, getMediaList} from '../util/api';
import {useAsync} from '../util/useAsync';
import BillboardCtrlBottom from './BillboardCtrlBottom';
import BillboardCtrlTop from './BillboardCtrlTop';

const Billboard = () => {
  const {data: list, error, run} = useAsync<Media[]>([]);

  useEffect(() => {
    run(getMediaList());
  }, [run]);

  const i = 0;
  const movie = list[i];

  return (
    <View style={styles.billboard}>
      {error ? (
        <View>
          <Text style={typography.display5}>{error.message}</Text>
        </View>
      ) : (
        <ImageBackground
          source={{uri: getImageUrl(movie?.backdrop_path, 500)}}
          style={styles.backgroundImage}>
          <BillboardCtrlTop />
          <Text
            style={typography.display1}
            adjustsFontSizeToFit
            allowFontScaling>
            {movie?.title}
          </Text>
          <Text style={{...typography.display4, textAlign: 'center'}}>
            #{i + 1} in Canada Today
          </Text>
          <BillboardCtrlBottom />
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  billboard: {
    height: '30%',
    minHeight: 200,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Billboard;
