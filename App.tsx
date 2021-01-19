import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import HorizontalList from './components/HorizontalList';
import {homeLists} from './helper/constants';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          {homeLists.map((list) => (
            <HorizontalList key={list.id + list.mediaType} data={list} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#222',
    paddingLeft: 4,
    paddingRight: 4,
  },
});

export default App;
