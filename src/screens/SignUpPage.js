import { StyleSheet, Text, View, Image, SafeAreaView,  KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Pressable  } from 'react-native'
import { CustomTextInput, CustomButton } from '../components'
import { useState } from 'react'

const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Android için undefined bırak
        style={styles.containerView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
            contentContainerStyle={styles.scrollContainer} 
            keyboardShouldPersistTaps="handled" // Klavye açıkken tıklamaları yönlendir
          >
      <View style={styles.titleStyle}>
        <Text style={styles.signUp}>Sign Up</Text>

        <Image
          style={styles.imageStyle}
          source={require('../../assets/login.png')}
        />
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handlePlaceholder="Enter your name"
          handleOnChangeText={setName}
          handleValue={name}
        />

        <CustomTextInput
          title="Email"
          isSecureText={false}
          handlePlaceholder="Enter your email"
          handleOnChangeText={setEmail}
          handleValue={email}
        />

       <CustomTextInput
          title="Password"
          isSecureText={true}
          handlePlaceholder="Create your password"
          handleOnChangeText={setPassword}
          handleValue={password}
        />
      </View>

      <View style={styles.signUpOptions}>
        <CustomButton
          buttonText="Sign Up"
          setWidth='80%'
          buttonColor='#1745ed'
          pressedButtonColor='gray'
          handleOnPress={() => console.log(name, " ", email, " ", password )}
        />

         <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{fontWeight: 'bold'}}>Already have an account? Login</Text>
         </Pressable>
      </View>
    </ScrollView>

    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  containerView: {
    flex: 1,
    backgroundColor: '#d7e8f7',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, 
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  signUp: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:20,
  },
  titleStyle: {
    paddingTop: 50
  },
  signUpOptions: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})