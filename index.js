import {Navigation} from 'react-native-navigation';
import Orientation from 'react-native-orientation-locker';
import FullPlayer from './screens/FullPlayer';
import HomeScreen from './screens/HomeScreen';
import MediaDetail from './screens/MediaDetail';
import Search from './screens/Search';
import {charcoal, slateGray, white} from './styles/colors';

Orientation.lockToPortrait();

Navigation.registerComponent('com.netflixClone.Home', () => HomeScreen);
Navigation.registerComponent('com.netflixClone.Detail', () => MediaDetail);
Navigation.registerComponent('com.netflixClone.Player', () => FullPlayer);
Navigation.registerComponent('com.netflixClone.Search', () => Search);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  bottomTabs: {
    barStyle: 'black',
    visible: true,
    backgroundColor: charcoal,
  },
  bottomTab: {
    selectedTextColor: white,
    textColor: slateGray,
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.netflixClone.Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.netflixClone.Search',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
