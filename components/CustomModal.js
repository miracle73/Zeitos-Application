import { View, Text, Modal } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CustomModal = ({ children, animationType, transparent, visible, onRequestClose }) => {
    return (
        <>
            <View style={tw`flex-1 justify-center items-center rounded-full`}>
                <Modal animationType={animationType} transparent={transparent} visible={visible} onRequestClose={onRequestClose}>
                    <View style={tw`flex-1 justify-center items-center opacity-90 min-h-full bg-gray-400`}>
                        <View style={tw`bg-white p-8 rounded-lg items-center`}>
                            {children}
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default CustomModal;