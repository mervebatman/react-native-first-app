import { StyleSheet, Text, View, Pressable } from 'react-native'

const WelcomePage = ({route, navigation}) => {
    const {name, surname, email, age} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {name} {surname}!</Text>
      <Text style={styles.infoText}>Email: {email}</Text>
      <Text style={styles.infoText}>Age: {age}</Text>

      <Pressable 
                style={styles.buttonStyle} 
                onPress={() => navigation.goBack()} // Geri gitmek için
            >
                <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonStyle: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3498db',
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
})