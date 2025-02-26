import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthSttack';
import UserStack from './UserStack';

const RootNavigation = () => {

    const isAuth = false

  return (
    <NavigationContainer>
        {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  )
}

export default RootNavigation