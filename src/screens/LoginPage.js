import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image,Pressable } from 'react-native'

const LoginPage = () => {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
     <Image
             style={styles.imageStyle}
             source={require('../../assets/welcome.png')}
           />
            <Text style={styles.labelStyle}>Email</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder='Enter your email'
              value={email}
              onChangeText={setEmail}
            />
            <Text  style={styles.labelStyle}>Surname</Text>
             <TextInput
               style={styles.textInputStyle}
               placeholder='Enter your password'
                secureTextEntry={true}
               value={password}
               onChangeText={setPassword}
             />

              <Pressable
                  
                     style={({ pressed }) => [
                       styles.buttonStyle,
                      { backgroundColor: pressed ? 'gray' : '#3498db' } 
                      ]}
                     >
                     <Text style={{ color: 'white', fontWeight: 'bold'}}>Save</Text>
                    </Pressable>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    borderWidth:1,
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    paddingLeft: 10,
  },
  labelStyle: {
    alignSelf: 'flex-start', 
    marginLeft: '10%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonStyle: {
    width: '15%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#3498db',
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
  }
})