import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CurrencyListScreen from '../screens/CurrencyListScreen';
import OptionsScreen from '../screens/OptionsScreen';
import ThemesScreen from '../screens/ThemesScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Options: {
      screen: OptionsScreen,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: ThemesScreen,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyListScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    // headerVisible: false,
    // defaultNavigationOptions: {
    //   headerShown: false,
    // },
    mode: 'modal',
    headerMode: 'none',
    // cardStyle has been moved to navigationOptions Read on it
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

export default createAppContainer(Navigator);
