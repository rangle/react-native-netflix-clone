import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const BillboardCtrlTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowTop}>
        <Text style={styles.text}>LOGO</Text>
        <View style={styles.rowTop}>
          <Button
            title="📺"
            color="#fff"
            onPress={() => console.log('📺 clicked')}
          />
          <Button
            title="🐨"
            color="#fff"
            onPress={() => console.log('🐨 clicked')}
          />
        </View>
      </View>
      <View style={styles.rowBottom}>
        <Button
          title="TV Shows"
          color="#fff"
          onPress={() => console.log('TV Shows clicked')}
        />
        <Button
          title="Movies"
          color="#fff"
          onPress={() => console.log('Movies clicked')}
        />
        <Button
          title="Categories"
          color="#fff"
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
  rowTop: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  rowBottom: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default BillboardCtrlTop;
