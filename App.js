import RegisterPage from './src/screens/RegisterPage'
import WelcomePage from './src/screens/WelcomePage';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )

  //First Project
  // <NavigationContainer>
  //   <Stack.Navigator screenOptions={{headerShown: false}}>
  //     <Stack.Screen name="Register Page" component={RegisterPage} />
  //     <Stack.Screen name="Welcome" component={WelcomePage} />
  //   </Stack.Navigator>
  // </NavigationContainer>


}

export default App