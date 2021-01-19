import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Billboard from './components/Billboard';
import MovieList from './components/MovieList';
import {homeLists} from './helper/constants';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <Billboard />
          <View style={{paddingLeft: 4, paddingRight: 4}}>
            {homeLists.map((list) => (
              <MovieList key={list.title} data={list} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#222',
    flex: 1,
    height: '100%',
  },
});

export default App;
