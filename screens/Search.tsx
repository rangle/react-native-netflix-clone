import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MediaResults from '../components/MediaResults';
import {offWhite, slateGray} from '../styles/colors';
import {globalStyle} from '../styles/global';
import {typography} from '../styles/typography';
import {getSearch, getTrending} from '../util/api';

const Search = (props) => {
  const [searchText, setSearchText] = React.useState('');
  const callback = useCallback(() => {
    return searchText ? getSearch(searchText) : getTrending();
  }, [searchText]);

  const label = searchText ? 'Movies & TV Shows' : 'Top Searches';

  return (
    <View style={globalStyle.container}>
      <SafeAreaView>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={offWhite}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <ScrollView>
          <View style={{flex: 1}}>
            <Text
              style={{...typography.display4, marginTop: 16, marginBottom: 8}}>
              {label}
            </Text>
            <MediaResults {...props} callback={callback} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

Search.options = {
  bottomTab: {
    text: 'Search',
  },
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: slateGray,
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 16,
    marginRight: 4,
    marginLeft: 4,
    borderRadius: 4,
    padding: 4,
  },
});

export default Search;
