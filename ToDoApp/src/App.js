import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import NotesPreviewScreen from './screens/NotesPreviewScreen';

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  NotesPreview: { screen: NotesPreviewScreen }
}, {
  initialRouteName: "Login",
  // headerVisible: false,
}
);

const App = createAppContainer(MainNavigator);

export default App;
