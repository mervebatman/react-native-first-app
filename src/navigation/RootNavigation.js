import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthSttack';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';
import { use } from 'react';

const RootNavigation = () => {

  const { isAuth } = useSelector((state) => state.user)

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  )
}

export default RootNavigation