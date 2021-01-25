import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Button from '../components/Button';
import {typography} from '../styles/typography';
import {Media} from '../types/Media.type';
interface Props {
  item: Media;
}

const BillboardCtrlBottom: NavigationFunctionComponent<Props> = ({
  item,
  componentId,
}) => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.controlContainer}>
        <Text style={{...typography.display3, fontSize: 26}}>+</Text>
        <Text style={typography.display6}>My List</Text>
      </View>
      <Button
        title="▶ Play"
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'com.netflixClone.Player',
              passProps: {item, autoplay: true},
            },
          })
        }
      />
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
});

export default BillboardCtrlBottom;
