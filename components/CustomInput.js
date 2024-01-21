import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, value, type, style, onChangeText, secureTextEntry, multiline, numberOfLines, textAlignVertical }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            type={type}
            style={style}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            numberOfLines={numberOfLines}
            textAlignVertical={textAlignVertical}
        />
    )
}

export default CustomInput