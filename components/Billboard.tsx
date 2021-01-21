import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {getImageUrl} from '../helper/api';
import {billboardMovie} from '../helper/constants';
import {useMediaList} from '../helper/hooks';
import BillboardCtrlBottom from './BillboardCtrlBottom';
import BillboardCtrlTop from './BillboardCtrlTop';

const Billboard = () => {
  const [list, error] = useMediaList(billboardMovie);

  const i = 0;
  const movie = list[i];

  return (
    <View style={styles.billboard}>
      {error ? (
        <View>
          <Text style={styles.controlText}>{error.message}</Text>
        </View>
      ) : (
        <ImageBackground
          source={{uri: getImageUrl(movie?.backdrop_path, 500)}}
          style={styles.backgroundImage}>
          <BillboardCtrlTop />
          <Text style={styles.title} adjustsFontSizeToFit allowFontScaling>
            {movie?.title}
          </Text>
          <Text style={styles.subtitle}>#{i + 1} in Canada Today</Text>
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
  title: {
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: '900',
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 128,
  },
  subtitle: {
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  controlText: {
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Billboard;
