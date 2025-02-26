import { LoginPage, SignUpPage } from '../screens'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthSttack = () => {
  return (
   <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
    <Stack.Screen name='Login' component={LoginPage} />
    <Stack.Screen name='Signup' component={SignUpPage} />
   </Stack.Navigator>
  )
}

export default AuthSttack