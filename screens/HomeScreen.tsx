import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import {homeLists} from '../helper/constants';

const HomeScreen = (props) => {
  return (
    <View style={styles.homeContainer}>
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
Navigation.registerComponent('Home', () => HomeScreen);
