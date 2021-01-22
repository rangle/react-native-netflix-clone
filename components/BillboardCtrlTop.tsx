import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {white} from '../styles/colors';
import {typography} from '../styles/typography';

const BillboardCtrlTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowTop}>
        <Text style={typography.display4}>LOGO</Text>
        <View style={styles.rowTop}>
          <Button
            title="📺"
            color={white}
            onPress={() => console.log('📺 clicked')}
          />
          <Button
            title="🐨"
            color={white}
            onPress={() => console.log('🐨 clicked')}
          />
        </View>
      </View>
      <View style={styles.rowBottom}>
        <Button
          title="TV Shows"
          color={white}
          onPress={() => console.log('TV Shows clicked')}
        />
        <Button
          title="Movies"
          color={white}
          onPress={() => console.log('Movies clicked')}
        />
        <Button
          title="Categories"
          color={white}
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
});

export default BillboardCtrlTop;
