import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image,Pressable } from 'react-native'
import {Loading, CustomTextInput, CustomButton} from '../components/';

const LoginPage = ({navigation}) => {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
          <Image
             style={styles.imageStyle}
             source={require('../../assets/login.png')}
           />

          <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePlaceholder="Enter your email"
          />

          <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePlaceholder="Enter your password"
          />

          <CustomButton
            buttonText="Login"
            setWidth='80%'
            handleOnPress={() => setIsLoading(true)}
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