import {Navigation} from 'react-native-navigation';
import FullPlayer from './screens/FullPlayer';
import HomeScreen from './screens/HomeScreen';
import MediaDetail from './screens/MediaDetail';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Detail', () => MediaDetail);
Navigation.registerComponent('Player', () => FullPlayer);

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
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
