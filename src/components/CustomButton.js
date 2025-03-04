import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText, setWidth, handleOnPress, buttonColor, pressedButtonColor}) => {
  return (
    <Pressable
        onPress={() =>handleOnPress()}
        style={({ pressed }) => [
        styles.buttonStyle,
        { backgroundColor: pressed ? pressedButtonColor : buttonColor, width: setWidth } ]}
    >
        <Text style={{ color: 'white', fontWeight: 'bold'}}>{buttonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: '#1745ed',
    },
})