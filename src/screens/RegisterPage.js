import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import FirstExample from '../components/FirstExample';
import {useEffect, useState} from 'react';
import Loading from '../components/Loading';

export default function RegisterPage({navigation}) {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = () => {
    setIsLoading(true);
    
    console.log("Gönderilen Veriler:", {
        name: name,
        surname: surname,
        email: email,
        age: age,
    });

    setTimeout(() => { 
        setIsLoading(false);
        navigation.navigate('Welcome', {
            name: name,
            surname: surname,
            email: email,
            age: age,
        });
    }, 3000);
};

useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        setName('');
        setSurname('');
        setEmail('');
        setAge('');
        setPassword('');
    });

    return unsubscribe;
}, [navigation]);

  return (
    // <FirstExample />

     <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/welcome.png')}
      />
       <Text style={styles.labelStyle}>Name</Text>
       <TextInput
         style={styles.textInputStyle}
         placeholder='Enter your name'
         value={name}
         onChangeText={setName}
       />
       <Text  style={styles.labelStyle}>Surname</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder='Enter your surname'
          value={surname}
          onChangeText={setSurname}
        />
         <Text style={styles.labelStyle}>Age</Text>
       <TextInput
         style={styles.textInputStyle}
         placeholder='Enter your age'
         keyboardType='numeric'
         value={age}
         onChangeText={setAge}
       />
         <Text style={styles.labelStyle}>Email</Text>
       <TextInput
         inputMode=''
         style={styles.textInputStyle}
         placeholder='Enter your email'
         value={email}
         onChangeText={setEmail}
       />
         <Text style={styles.labelStyle}>Password</Text>
       <TextInput
         style={styles.textInputStyle}
         placeholder='Enter your password'
         value={password}
         onChangeText={setPassword}
         secureTextEntry={true}
       />

       <Pressable
       onPress={handleRegister}
        // onPress={() => {
        // //   setIsLoading(true)
        // //   setResult(`Welcome ${name}  ${surname} `)
        // }}
        style={({ pressed }) => [
          styles.buttonStyle,
         { backgroundColor: pressed ? 'gray' : '#3498db' } 
         ]}
        >
        <Text style={{ color: 'white', fontWeight: 'bold'}}>Save</Text>
       </Pressable>

       {result !== "" &&  <Text style={styles.resultText}>{result}</Text>}
      
         {isLoading ? <Loading /> : null}
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    borderWidth:1,
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginVertical: 10
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
});
