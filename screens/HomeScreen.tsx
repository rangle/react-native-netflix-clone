import {useNetInfo} from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList';
import {MediaTypeSelectionProvider} from '../context/MediaTypeSelectionContext';
import Colors from '../styles/colors';
import {globalStyle} from '../styles/global';
import {homeLists} from '../util/constants';

const HomeScreen = () => {
  const {isConnected} = useNetInfo();

  useEffect(() => {
    if (!isConnected) {
      Navigation.showOverlay({
        component: {
          name: 'com.netflixClone.offlineToast',
          passProps: {message: 'Offline! Please check your connection.'},
        },
      });
    }
  }, [isConnected]);

  return (
    <View style={styles.homeContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <MediaTypeSelectionProvider>
            <Billboard />
            <View style={styles.movieListContainer}>
              {homeLists.map((list) => (
                <MovieList key={list.title} data={list} />
              ))}
            </View>
          </MediaTypeSelectionProvider>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

HomeScreen.options = {
  bottomTab: {
    text: 'Home',
  },
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Colors.charcoal,
    flex: 1,
    height: '100%',
  },
  movieListContainer: {
    ...globalStyle.container,
    flex: 3,
  },
});

export default HomeScreen;
