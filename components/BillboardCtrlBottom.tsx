import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const BillboardCtrlBottom = () => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.controlContainer}>
        <Text style={{...styles.controlText, fontSize: 26}}>+</Text>
        <Text style={styles.controlText}>My List</Text>
      </View>
      <View style={styles.playBtnContainer}>
        <Button
          title="▶ Play"
          onPress={() => console.log('clicked...')}
          color="#000"
        />
      </View>
      <View style={styles.controlContainer}>
        <Text style={{...styles.controlText, fontSize: 26}}>ℹ</Text>
        <Text style={styles.controlText}>Info</Text>
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
  controlText: {
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default BillboardCtrlBottom;
