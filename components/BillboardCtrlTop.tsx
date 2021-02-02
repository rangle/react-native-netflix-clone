import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import {useMediaTypeSelection} from '../context/MediaTypeSelectionContext';
import {MediaType, MediaTypes} from '../types/MediaTypes.enum';

const BillboardCtrlTop = () => {
  const [mediaTypeSelection, setMediaTypeSelection] = useMediaTypeSelection();

  const handleMediaTypeSelection = (selection: MediaType) => {
    if (selection === mediaTypeSelection) {
      setMediaTypeSelection(MediaTypes.ALL);
    } else {
      setMediaTypeSelection(selection);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowTop1}>
        <View>
          <Image
            style={styles.logo}
            source={require('../image/Netflix_logo.png')}
          />
        </View>
        <View style={styles.rowTop2}>
          <View style={styles.button}>
            <Button title="📺" link onPress={() => console.log('📺 clicked')} />
          </View>
          <View style={styles.button}>
            <Button title="🐨" link onPress={() => console.log('🐨 clicked')} />
          </View>
        </View>
      </View>
      <View style={styles.rowBottom}>
        <Button
          title="TV Shows"
          link
          onPress={() => handleMediaTypeSelection(MediaTypes.TV)}
          active={mediaTypeSelection === MediaTypes.TV}
        />
        <Button
          title="Movies"
          link
          onPress={() => handleMediaTypeSelection(MediaTypes.MOVIE)}
          active={mediaTypeSelection === MediaTypes.MOVIE}
        />
        <Button
          title="Categories"
          link
          onPress={() => console.log('Categories clicked')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowTop1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
  },
  rowTop2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 75,
  },
  logo: {
    margin: 10,
    height: 30,
    width: 30,
  },
  rowBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default BillboardCtrlTop;
