import { StyleSheet, Text, View, Image } from 'react-native'
import { Loading, CustomTextInput, CustomButton } from '../components/';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setIsLoading, setLogin } from '../redux/userSlice';
import { login } from '../redux/userSlice';
import { useState } from 'react';

const LoginPage = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // userSlice içindeki verilerin okunması
  const { isLoading } = useSelector((state) => state.user)

  console.log(email, password, isLoading);
  // userSlice içerisindeki reducer yapılarına veri gönderme
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/login.png')}
      />

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <CustomButton
        buttonText="Login"
        setWidth='80%'
        handleOnPress={() => dispatch(login({ email, password }))}
        buttonColor='#1745ed'
        pressedButtonColor='gray'
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth='25%'
        handleOnPress={() => navigation.navigate('Signup')}
        buttonColor='#1745ed'
        pressedButtonColor='gray'
      />
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7e8f7'
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
  }
})