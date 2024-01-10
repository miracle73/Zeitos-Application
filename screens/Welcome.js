import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import tw from "twrnc";
import CustomButton from '../components/CustomButton';

const Welcome = () => {
    return (
        <ImageBackground source={require("../assets/waves.webp")}>
            <View style={tw`flex justify-center items-start gap-8 mt-24`}>
                <View style={tw`flex justify-start items-start gap-2`}>
                    <Text style={tw`text-white text-bold`}>Welcome to Ushift</Text>
                    <Text style={tw`text-white text-base h-[63px]`}>Lorem ipsum dolor sit amet consectetur. Enim rhoncus ultrices adipiscing ac in. Aliquet pharetra volutpat mi egestas</Text>
                </View>
                <CustomButton style={tw`flex flex-row justify-center items-center`}>
                    <Text style={tw`text-white text-base text-center`}>Login</Text>
                </CustomButton>
                <CustomButton style={tw`flex flex-row justify-center items-center`}>
                    <Text style={tw`text-white text-base text-center`}>Create Account</Text>
                </CustomButton>
            </View>
        </ImageBackground>
    )
}

export default Welcome;