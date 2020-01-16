import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import NotesPreviewScreen from './screens/NotesPreviewScreen';

const MainNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    NotesPreview: { screen: NotesPreviewScreen },
  },
  {
    // if initial route is not given the very first screen is the initial one
    initialRouteName: 'Login',
  },
);

const App = createAppContainer(MainNavigator);
export default App;
