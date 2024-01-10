import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, value, type, style, onChangeText }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            type={type}
            style={style}
            onChangeText={onChangeText}
        />
    )
}

export default CustomInput