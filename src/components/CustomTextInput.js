import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder}) => {
  return (
    <View style={styles.inputContainer}>
       <Text style={styles.inputBoxText}>{title}</Text>
            <TextInput
                secureTextEntry={isSecureText}
                style={styles.textInputStyle}
                placeholder={handlePlaceholder}
                value={handleValue}
                onChangeText={handleOnChangeText}
            />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7e8f7',
        width: '100%',
    },
    inputBoxText: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        
    },
    textInputStyle: {
        borderBottomWidth: 0.5,
        width: '80%',
        height: 40,
        borderRadius: 5,
        marginVertical: 10,
        paddingLeft: 10,
    },
})