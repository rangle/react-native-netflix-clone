import {StyleSheet} from 'react-native';
import {charcoal} from './colors';

export const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: charcoal,
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  posterContainer: {
    padding: 2,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },
});
