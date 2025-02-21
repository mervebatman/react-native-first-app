import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function FirstExample() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <View style={{backgroundColor: 'red',  width: '60%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 10,}}>
        <Text style={{fontSize: 20, backgroundColor: 'yellow', fontWeight: '900', padding: 5}}>Merve Batmann</Text>
      </View>
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
});
