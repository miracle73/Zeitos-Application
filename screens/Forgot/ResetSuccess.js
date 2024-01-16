import { View, Text, Image, useAnimatedValue } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native"

import CustomButton from '../../components/CustomButton'

const ResetSuccess = () => {
    const navigation = useNavigation();

    return (
        <View style={tw`bg-white flex flex-col justify-center items-center gap-52 h-full p-8`}>
            <View style={tw`flex justify-center items-center gap-8`}>
                <View style={tw`flex flex-row justify-center items-center rounded-full w-[135px] bg-[#f5f7ff] my-auto`}>
                    <Image source={require("../../assets/congrats-icon.png")} style={tw`flex flex-row justify-center items-center`} />
                </View>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Bold.ttf' }, 'text-2xl text-center text-black')}>Reset Succesful</Text>
                <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-base text-center text-[#4a4a68]')}>Your password has been reset successfully</Text>
            </View>
            <View style={tw`flex flex-row justify-center items-center m-auto`}>
                <CustomButton style={tw`bg-[#001c46] w-[326px] py-4 px-8 rounded-lg`}>
                    <Text style={tw.style({ fontFamily: 'DMSans_18pt-Medium.ttf' }, 'text-center text-white text-lg')} onPress={() => navigation.navigate("Login")}>Login</Text>
                </CustomButton>
            </View>
        </View>
    )
}

export default ResetSuccess;