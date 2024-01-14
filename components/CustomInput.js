import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, value, type, style, onChangeText, secureTextEntry, multiline }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            type={type}
            style={style}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
        />
    )
}

export default CustomInput