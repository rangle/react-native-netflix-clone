import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import {typography} from '../styles/typography';

const BillboardCtrlTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowTop1}>
        <Text style={typography.display4}>LOGO</Text>
        <View style={styles.rowTop2}>
          <Button title="📺" link onPress={() => console.log('📺 clicked')} />
          <Button title="🐨" link onPress={() => console.log('🐨 clicked')} />
        </View>
      </View>
      <View style={styles.rowBottom}>
        <Button
          title="TV Shows"
          link
          onPress={() => console.log('TV Shows clicked')}
        />
        <Button
          title="Movies"
          link
          onPress={() => console.log('Movies clicked')}
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
    flex: 0,
    flexDirection: 'row',
  },
  rowTop2: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  rowBottom: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default BillboardCtrlTop;
