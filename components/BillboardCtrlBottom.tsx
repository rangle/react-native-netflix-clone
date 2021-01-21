import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {typography} from '../styles/typography';

const BillboardCtrlBottom = () => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.controlContainer}>
        <Text style={{...typography.display3, fontSize: 26}}>+</Text>
        <Text style={typography.display6}>My List</Text>
      </View>
      <View style={styles.playBtnContainer}>
        <Button
          title="▶ Play"
          onPress={() => console.log('clicked...')}
          color="#000"
        />
      </View>
      <View style={styles.controlContainer}>
        <Text style={{...typography.display3, fontSize: 26}}>ℹ</Text>
        <Text style={typography.display6}>Info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 8,
    marginBottom: 16,
  },
  controlContainer: {
    alignItems: 'center',
  },
  playBtnContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    minWidth: 100,
  },
});

export default BillboardCtrlBottom;
