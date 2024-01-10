import { Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ children, style, onPress }) => {
    return (
        <Pressable style={style} onPress={onPress}>
            {children}
        </Pressable>
    )
}

export default CustomButton