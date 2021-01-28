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
import {charcoal, mediumGray, slateGray} from '../styles/colors';
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
    <View style={styles.searchContainer}>
      <SafeAreaView>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={slateGray}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            clearButtonMode="while-editing"
            selectionColor={slateGray}
            style={styles.textInput}
          />
        </View>
        <ScrollView>
          <View style={styles.resultsContainer}>
            <Text style={styles.label}>{label}</Text>
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
  searchContainer: {
    ...globalStyle.container,
    backgroundColor: charcoal,
    flex: 1,
  },
  searchInput: {
    backgroundColor: mediumGray,
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 16,
    marginRight: 4,
    marginLeft: 4,
    borderRadius: 4,
    padding: 4,
  },
  resultsContainer: {
    flex: 1,
  },
  textInput: {
    color: charcoal,
  },
  label: {
    ...typography.display4,
    marginTop: 16,
    marginBottom: 8,
  },
});

export default Search;
