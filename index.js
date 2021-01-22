import {Navigation} from 'react-native-navigation';
import FullPlayer from './screens/FullPlayer';
import HomeScreen from './screens/HomeScreen';
import MediaDetail from './screens/MediaDetail';

Navigation.registerComponent('com.netflixClone.Home', () => HomeScreen);
Navigation.registerComponent('com.netflixClone.Detail', () => MediaDetail);
Navigation.registerComponent('com.netflixClone.Player', () => FullPlayer);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
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
  });
});
