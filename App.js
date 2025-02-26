import RegisterPage from './src/screens/RegisterPage'
import WelcomePage from './src/screens/WelcomePage';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return <RootNavigation />

    //First Project
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Register Page" component={RegisterPage} />
    //     <Stack.Screen name="Welcome" component={WelcomePage} />
    //   </Stack.Navigator>
    // </NavigationContainer>

  
}

export default App