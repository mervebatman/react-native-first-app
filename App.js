import RegisterPage from './src/screens/RegisterPage'
import WelcomePage from './src/screens/WelcomePage';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); // Stack Navigator tanımlandı!

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Register Page" component={RegisterPage} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App