import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color='#55e6f6' />
        <Text style={styles.loadingStyle}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})