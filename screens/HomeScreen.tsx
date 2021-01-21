import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import {homeLists} from '../util/constants';

const HomeScreen = (props) => {
  return (
    <View style={styles.homeContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <Billboard />
          <View style={{paddingLeft: 4, paddingRight: 4}}>
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
    backgroundColor: '#222',
    flex: 1,
    height: '100%',
  },
});

export default HomeScreen;
