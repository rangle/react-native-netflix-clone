import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import {charcoal} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {homeLists} from '../util/constants';

const HomeScreen: NavigationFunctionComponent<{}> = (props) => {
  return (
    <View style={styles.homeContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <Billboard {...props} />
          <View style={{...globalStyle.container, flex: 3}}>
            {homeLists.map((list) => (
              <MovieList key={list.title} {...props} data={list} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: charcoal,
    flex: 1,
    height: '100%',
  },
});

export default HomeScreen;
