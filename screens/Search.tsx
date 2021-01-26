import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Search = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
};

Search.options = {
  bottomTab: {
    text: 'Search',
  },
};

export default Search;
